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

 $('[data-toggle="tooltip"]').tooltip();

// SHOW HIDE FIELDSET FORM REGISTRO

$('#nextCorreo').click(function() {
  $('#crearCorreoFieldset').show();
  $('#datosPersonalesFieldset').hide();
});

$('#backDatos').click(function() {
  $('#crearCorreoFieldset').hide();
  $('#datosPersonalesFieldset').show();
});

$('#nextDatosEmpresa').click(function() {
  $('#datosEmpresaFieldset').show();
  $('#crearCorreoFieldset').hide();
});

$('#backCorreo').click(function() {
  $('#datosEmpresaFieldset').hide();
  $('#crearCorreoFieldset').show();
});

// FIN SHOW HIDE FIELDSET FORM REGISTRO

// DATE PICKER =======================

try {

  moment.locale('es');

  $('.js-datepicker').daterangepicker({
    "singleDatePicker": true,
    "showDropdowns": true,
    "autoUpdateInput": false,
    locale: {
      format: 'DD/MM/YYYY',
      currentText: 'Hoy',
      weekHeader: 'Sm',
    },
  });

  var myCalendar = $('.js-datepicker');
  var isClick = 0;

  $(window).on('click', function() {
    isClick = 0;
  });

  $(myCalendar).on('apply.daterangepicker', function(ev, picker) {
    isClick = 0;
    $(this).val(picker.startDate.format('DD/MM/YYYY'));

  });

  $('.js-btn-calendar').on('click', function(e) {
    e.stopPropagation();

    if (isClick === 1) isClick = 0;
    else if (isClick === 0) isClick = 1;

    if (isClick === 1) {
      myCalendar.focus();
    }
  });

  $(myCalendar).on('click', function(e) {
    e.stopPropagation();
    isClick = 1;
  });

  $('.daterangepicker').on('click', function(e) {
    e.stopPropagation();
  });


} catch (er) {
  console.log(er);
}


// FIN DATE PICKER

// DATE RANGE PICKER
// $('#date_range').daterangepicker();

$('.rangePicker').daterangepicker({
  "locale": {
    "format": "DD-MM-YYYY",
    "separator": " - ",
    "applyLabel": "Guardar",
    "cancelLabel": "Cancelar",
    "fromLabel": "Desde",
    "toLabel": "Hasta",
    "customRangeLabel": "Personalizar",
    "daysOfWeek": [
      "Do",
      "Lu",
      "Ma",
      "Mi",
      "Ju",
      "Vi",
      "Sa"
    ],
    "monthNames": [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    "firstDay": 1
  },
  "opens": "right"
});
// RANGE DATE PICKER

});
