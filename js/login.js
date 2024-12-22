// "use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye-slash fa-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// END SHOW-HIDE PASSWORD

 // TOOLTIP
 $('[data-toggle="tooltip"]').tooltip();
 // FIN TOOLTIP

 // SHOW-HIDE STEP FORM
 $('#link-step2').click(function() {
   $('#form-step2').show();
   $('#form-step1').hide();
 });

 $('#link-step1').click(function() {
   $('#form-step2').hide();
   $('#form-step1').show();
 });
 // FIN SHOW-HIDE STEP FORM

 // UNSUBSCRIBE
 $("#unsubscribe-btn").click(function() {
   $("#form-unsubscribe").hide();
   $("#confirm-unsubscribe").show();
 });
 // END UNSUBSCRIBE



});
