'use strict';

angular.module('invoicingApp')
	.service('customers_service',['$http', 'helper_service',
		function ($http, helper_service) {
			var service = {};

			service.getAll = function() {
				return $http.get(helper_service.api_url + '/api/customers');
			};

			return service;
		}]);