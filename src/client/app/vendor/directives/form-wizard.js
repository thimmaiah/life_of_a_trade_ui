/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/

angular.module('app.vendor').directive('formWizard', function(){
  'use strict';

  if(!$.fn.bwizard) return;

  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {
      var wizard = $(element).children('.form-wizard'),
          validate = attrs.validateStep; // allow to set options via data-* attributes
      console.log("validate = " + validate);
      console.log(wizard);
      
      if(validate) {
        wizard.bwizard({
          clickableSteps: true,
          validating: function(e, ui) {

            var $this = $(this),
                form = $this.closest("form"),
                
                group = form.find('.bwizard-activated');
                
            	console.log(form.parsley().validate( group[0].id ));
            	console.log(group[0].id);
            if (false === form.parsley().validate( group[0].id )) {
              e.preventDefault();
              return;
            }
          }
        });
      }
      else {
        wizard.bwizard();
      }
      
    }
  };

});
