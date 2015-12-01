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
                state: 'app.listUser',
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
                state: 'app.createUser',
                config: {
                    url: '/user/create',
                    templateUrl: 'app/user/views/create.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'Create User'
                }
            },
            {
                state: 'app.viewUser',
                config: {
                    url: '/user/:userId',
                    templateUrl: 'app/user/views/view.html',
                    controller: 'UserController',
                    controllerAs: 'vm',
                    title: 'View User'
                }
            },
            {
                state: 'app.editUser',
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
