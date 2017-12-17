'use strict';

angular.module('invoicingApp')
	.service('products_service',['$http', 'helper_service',
		function ($http, helper_service) {
			var service = {};

			service.getAll = function() {
				return $http.get(helper_service.api_url + '/api/products');
			};

			return service;
		}]);