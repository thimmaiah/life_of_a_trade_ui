(function() {
	'use strict';

	angular
			.module(
					'app.core',
					[ 'ngAnimate', 'ngSanitize', 'blocks.exception',
							'blocks.logger', 'blocks.router', 'ui.router',
							'ngplus', 'ngResource', 'ui.bootstrap', 'ngTable',
							'formly', 'formlyBootstrap' ])
			.run(
					[
							"$rootScope",
							"$state",
							"$stateParams",
							"$window",
							function($rootScope, $state, $stateParams, $window) {

								// Set reference to access them from any scope
								$rootScope.$state = $state;
								$rootScope.$stateParams = $stateParams;
								$rootScope.$storage = $window.localStorage;
								$rootScope.current_user = {};

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
