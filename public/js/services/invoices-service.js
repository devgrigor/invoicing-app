'use strict';

angular.module('invoicingApp')
	.service('invoices_service',['$http', 'helper_service',
		function ($http, helper_service) {
			var service = {};

			service.getAll = function() {
				return $http.get(helper_service.api_url + '/api/invoices');
			};

			service.store = function(data) {
				return $http.post(helper_service.api_url + '/api/invoices', data);
			};

			service.update = function(data) {
				return $http.put(helper_service.api_url + '/api/invoices/'+data.id, data);
			};

			return service;
		}]);