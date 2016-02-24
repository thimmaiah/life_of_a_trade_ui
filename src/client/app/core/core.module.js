(function() {
	'use strict';


	angular
			.module(
					'app.core',
					[ 'ngAnimate', 'ngSanitize', 'blocks.exception',
							'blocks.logger', 'blocks.router', 'ui.router',
							'ngplus', 'ngResource', 'ui.bootstrap', 'ngTable',
							'formly', 'formlyBootstrap', 'ng-token-auth',
							'faye' ])

			.config(function($authProvider) {
				$authProvider.configure({
					apiUrl : 'http://localhost:3000'
				})
			})
			.factory('Faye', ['$faye', function($faye) {
					return $faye("http://localhost:9292/faye");
				}
			])
			.run(
					[
							"$rootScope",
							"$state",
							"$stateParams",
							"$window",
							"$auth",
							function($rootScope, $state, $stateParams, $window,
									$auth) {

								// Set reference to access them from any scope
								$rootScope.$state = $state;
								$rootScope.$stateParams = $stateParams;
								$rootScope.$storage = $window.localStorage;
								$rootScope.current_user = {};

								// If the user session is valid, ensure the
								// current_user is set
								$auth.validateUser().then(function(resp) {
									console.log(resp); // => {id: 1, ect:
									// '...'}
									$rootScope.current_user = resp;
									$state.go("app.listUser");
								});

								// Scope Globals
								// -----------------------------------
								$rootScope.app = {
									name : 'LifeOfATrade',
									description : 'Matching Students with Schools all over',
									year : ((new Date()).getFullYear()),
									layout : {
										isFixed : true,
										isCollapsed : false,
										isBoxed : false,
										isRTL : false
									},
									viewAnimation : 'ng-fadeInUp'
								};

							} ]);

})();
