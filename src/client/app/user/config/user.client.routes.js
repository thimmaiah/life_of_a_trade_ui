(function() {
    'use strict';

    angular
        .module('app.user')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listUser',
                config: {
                    url: '/user',
                    templateUrl: 'app/user/views/list.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'List Users',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Users'
                    }
                }
            },
            {
                state: 'createUser',
                config: {
                    url: '/user/create',
                    templateUrl: 'app/user/views/create.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'Create User'
                }
            },
            {
                state: 'viewUser',
                config: {
                    url: '/user/:userId',
                    templateUrl: 'app/user/views/view.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'View User'
                }
            },
            {
                state: 'editUser',
                config: {
                    url: '/user/:userId/edit',
                    templateUrl: 'app/user/views/edit.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'Edit User'
                }
            }
        ];
    }
})();
