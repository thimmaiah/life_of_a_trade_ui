angular.module('app.vendor').service('modalService', [ '$modal', function($modal) {

	var confirmDefaults = {
		backdrop : true,
		keyboard : true,
		modalFade : true,
		templateUrl : 'app/templates/views/partials/confirm.html'
	};

	var confirmOptions = {
		closeButtonText : 'Cancel',
		actionButtonText : 'Ok',
		headerText : 'Proceed?',
		bodyText : 'Perform this action?'
	};
	
	var alertDefaults = {
		backdrop : true,
		keyboard : true,
		modalFade : true,
		templateUrl : 'app/templates/views/partials/alert.html',
		size: 'sm'
	};

	var alertOptions = {
		closeButtonText : 'Close',
		actionButtonText : '',
		headerText : 'Alert',
		bodyText : 'Alert'
	};
	
	
	this.showConfirm = function(modalDefaults, modalOptions) {
		if (!modalDefaults)
			modalDefaults = {};
		modalDefaults.backdrop = 'static';
		return this.show(modalDefaults, confirmDefaults, modalOptions, confirmOptions);
	};
	
	
	this.showAlert = function(modalDefaults, modalOptions) {
		if (!modalDefaults)
			modalDefaults = {};
		modalDefaults.backdrop = 'static';
		return this.show(modalDefaults, alertDefaults, modalOptions, alertOptions);
	};
	
	
	this.showOperationFailed = function(response) {
		// 403 is handled inside the access_denied_interceptor
		if(response.status != 403 && response.status != 401) {
			modalDefaults = {};
			modalOptions  = 
				{ 
					headerText: "Error", 
					bodyText: "Failed to perform this operation. Error " + response.status + " " + JSON.stringify(response.data)
				};
			modalDefaults.backdrop = 'static';
			return this.show(modalDefaults, alertDefaults, modalOptions, alertOptions);
		}
	};
	
	this.showError = function(error) {		
		modalDefaults = {};
		modalOptions  = {headerText: "Error", bodyText: error};
		modalDefaults.backdrop = 'static';
		return this.show(modalDefaults, alertDefaults, modalOptions, alertOptions);
	};
	
	this.showInfo = function(message) {		
		modalDefaults = {};
		modalOptions  = {headerText: "Info", bodyText: message};
		modalDefaults.backdrop = 'static';
		return this.show(modalDefaults, alertDefaults, modalOptions, alertOptions);
	};
	
	this.showConfirmDelete = function(entity, entityDetails) {		
		modalDefaults = {};
		modalOptions  = {closeButtonText: "Cancel",
						actionButtonText: "Delete",
						headerText: "Delete " + entityDetails + "?",
						bodyText: "Are you sure you want to delete " +  entity + "?"};
		modalDefaults.backdrop = 'static';
		return this.show(modalDefaults, confirmDefaults, modalOptions, confirmOptions);
	};

	this.show = function(customModalDefaults, baseDefaults, customModalOptions, baseOptions) {
		// Create temp objects to work with since we're in a singleton service
		var tempModalDefaults = {};
		var tempModalOptions = {};

		// Map angular-ui modal custom defaults to modal defaults defined in
		// service
		angular.extend(tempModalDefaults, baseDefaults, customModalDefaults);

		// Map modal.html $scope custom properties to defaults defined in
		// service
		angular.extend(tempModalOptions, baseOptions, customModalOptions);

		if (!tempModalDefaults.controller) {
			tempModalDefaults.controller = function($scope, $modalInstance) {
				$scope.modalOptions = tempModalOptions;
				$scope.modalOptions.ok = function(result) {
					$modalInstance.close(result);
				};
				$scope.modalOptions.close = function(result) {
					$modalInstance.dismiss('cancel');
				};
			}
		}

		return $modal.open(tempModalDefaults).result;
	};

} ]);