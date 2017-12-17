'use strict';

angular.module('invoicingApp')
	.controller('HomeCtrl',[ '$scope', 'products_service', 'invoices_service',  'customers_service',
	function ($scope, products_service, invoices_service, customers_service) {
		$scope.selectedProducts = [];
		$scope.selectProducts = [];
		$scope.selectCustomers = [];
		$scope.invoices = [];
		$scope.invoice = {
			discount: 0
		};

		$scope.createInvoice = function() {
			if(!$scope.invoice.id) {
				invoices_service.store($scope.invoice).then(function(res){
					$scope.invoice = res.data;
					$scope.createMode = true;
				});
			}
		};

		products_service.getAll().then(function(res){
			$scope.selectOptions = res.data;
		});

		customers_service.getAll().then(function(res){
			$scope.selectCustomers = res.data;
		});

		$scope.calculatePrice = function() {
			var price = 0;

			for(var i in $scope.selectedProducts) {
				if($scope.selectedProducts[i].quantity) {
					price += $scope.selectedProducts[i].price * $scope.selectedProducts[i].quantity;
				} else {
					$scope.selectedProducts[i].quantity = 1;
					price += $scope.selectedProducts[i].price;
				}

			}

			price -= price*$scope.invoice.discount/100;

			$scope.invoice.total = price.toFixed(2);

			$scope.updateInvoice();
		};

		invoices_service.getAll().then(function(res){
			$scope.invoices = res.data;
		});

		$scope.updateInvoice = function() {
			invoices_service.update($scope.invoice);
		}
	}]);