(function() {
    'use strict';

    angular
        .module('app.customer')
        .factory('Customer', Customer);

    Customer.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Customer($resource, API_BASE_URL) {

        var params = {
            customerId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            search: {
            	url: API_BASE_URL + "/customers/search",	
            	method: "GET",
            	params: {term: '@term'},
            	isArray: true
            }
        };

        var API_URL = API_BASE_URL + '/customers/:customerId';

        return $resource(API_URL, params, actions);

    }

})();
