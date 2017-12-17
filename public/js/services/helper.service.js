'use strict';

angular.module('invoicingApp')
	.service('helper_service',['$http',
		function ($http) {
			var service = {};

			service.api_url = 'htp://localhost:8000';

			return service;
		}
	]);