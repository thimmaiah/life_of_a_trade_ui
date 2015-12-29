(function() {
    'use strict';

    angular
        .module('app.user')
        .factory('User', User);
    
    User.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function User($resource, API_BASE_URL) {

        
        var params = {
            userId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
	        delete: {
	            method: 'DELETE'
	        }
        };
        
        var API_URL = 'http://localhost:8000/users/:userId';

        return $resource(API_URL, params, actions);

    }

})();
