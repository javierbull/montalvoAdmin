$(document).ready(function () {
  // alert("Hello! I am an alert box!!");

  

  // Rich text editor
  tinymce.init({
    selector: "richtextarea",
    menubar: false,
    plugins: "lists advlist autolink autoresize charmap code emoticons hr image insertdatetime link media paste preview searchreplace table textpattern toc visualblocks visualchars wordcount quickbars",
    toolbar: "bold italic underline strikethrough | numlist bullist | link emoticons",
    insertdatetime_element: true,
    media_scripts: [
      { filter: 'platform.twitter.com' },
      { filter: 's.imgur.com' },
      { filter: 'instagram.com' },
      { filter: 'https://platform.twitter.com/widgets.js' },
    ],
    browser_spellcheck: true,
    contextmenu: false,
  });

  tinymce.init({
    selector: "richtextareaedit",
    menubar: false,
    plugins: "lists advlist autolink autoresize charmap code emoticons hr image insertdatetime link media paste preview searchreplace table textpattern toc visualblocks visualchars wordcount quickbars",
    toolbar: "bold italic underline strikethrough | numlist bullist | link emoticons",
    insertdatetime_element: true,
    media_scripts: [
      { filter: 'platform.twitter.com' },
      { filter: 's.imgur.com' },
      { filter: 'instagram.com' },
      { filter: 'https://platform.twitter.com/widgets.js' },
    ],
    browser_spellcheck: true,
    contextmenu: false,
 
  
  });

  // End Rich text editor

  // IMAGE PREVIEW 
  $('#input-preview-img-cupon').change(function () {
    var curElement = $('#preview-cupon');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-editarCupon').change(function () {
    var curElement = $('#preview-editarCupon');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-addBannerMobile').change(function () {
    var curElement = $('#preview-addBannerMobile');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-addBannerDesktop').change(function () {
    var curElement = $('#preview-addBannerDesktop');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-editBannerMobile').change(function () {
    var curElement = $('#preview-editBannerMobile');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-editBannerDesktop').change(function () {
    var curElement = $('#preview-editBannerDesktop');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-addPopup').change(function () {
    var curElement = $('#preview-addPopup');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  $('#input-preview-img-editPopup').change(function () {
    var curElement = $('#preview-editPopup');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
  // END IMAGE PREVIEW

  // Sidebar active item
  $(".sidebar-item-db").on('click', function () {
    $(".sidebar-item-db").removeClass('active-item');
    $(this).addClass('active-item');
  });

  $(".btn-sidebar-toggle--vales").click(function () {
    $(".sidebar-list-collapse--vales").toggle();
  });

  $(".btn-sidebar-toggle--sedes").click(function () {
    $(".sidebar-list-collapse--sedes").toggle();
  });
  // End sidebar item active

  // Shoe paneld admin
  $(".showAdminPanel-dashboard").click(function () {
    $("#dashboard-panel").show();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-colaboradores").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").show();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-colaboradoreNuevo").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").show();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-empresa").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").show();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-sedes").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").show();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-contactos").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").show();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-contactoNuevo").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").show();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-inhouse").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").show();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-nuevaVisitaInhouse").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").show();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-cumples").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").show();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-planilla").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").show();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-aprobarCompras").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").show();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-comprasPlanilla").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").show();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-sedeNuevo").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").show();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-vales").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").show();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-reasignarVales").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").show();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-solicitudes").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").show();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-solicitadosDetalle").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").show();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-cupones").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").show();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-nuevoCupon").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").show();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-marcas").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").show();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-productos").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").show();
    $("#comunicaciones-panel").hide();
  });

  $(".showAdminPanel-comunicaciones").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
    $("#planilla-panel").hide();
    $("#aprobarCompras-panel").hide();
    $("#comprasPlanilla-panel").hide();
    $("#sedeNuevo-panel").hide();
    $("#vales-panel").hide();
    $("#reasignarVales-panel").hide();
    $("#solicitudes-panel").hide();
    $("#solicitadosDetalle-panel").hide();
    $("#cupones-panel").hide();
    $("#nuevoCupon-panel").hide();
    $("#marcas-panel").hide();
    $("#productos-panel").hide();
    $("#comunicaciones-panel").show();
  });
  // end show admib panels

  // STEPPER ADMIN
  $(".show-stepper-datosContacto").click(function () {
    $("#stepper-datosContacto").show();
    $("#stepper-datosPersonales").hide();
    $("#stepper-configPerfil").hide();
  });

  $(".show-stepper-datosPersonales").click(function () {
    $("#stepper-datosContacto").hide();
    $("#stepper-datosPersonales").show();
    $("#stepper-configPerfil").hide();
  });

  $(".show-stepper-configPerfil").click(function () {
    $("#stepper-datosContacto").hide();
    $("#stepper-datosPersonales").hide();
    $("#stepper-configPerfil").show();
  });

  $(".show-stepper-cuponDatos").click(function () {
    $("#stepper-cuponDatos").show();
    $("#stepper-cuponDesc").hide();
    $("#stepper-cuponConfirmacion").hide();
  });

  $(".show-stepper-cuponDesc").click(function () {
    $("#stepper-cuponDatos").hide();
    $("#stepper-cuponDesc").show();
    $("#stepper-cuponConfirmacion").hide();
  });

  $(".show-stepper-cuponConfirmacion").click(function () {
    $("#stepper-cuponDatos").hide();
    $("#stepper-cuponDesc").hide();
    $("#stepper-cuponConfirmacion").show();
  });
  // END STEPPER ADMIN

   // DATATABLES
   $('.dtable').DataTable({
    "language": {
      "lengthMenu": "Mostrar _MENU_ filas",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": ">",
        "sPrevious": "<"
      },
      "sProcessing": "Procesando...",
    }
  });
  // END DATATABLES
 

  // CAMBIAR LOGO EMPRESA
  $('#editar-empresa-input-preview-img').change(function () {
    var curElement = $('#editar-empresa-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      curElement.attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
  });
  // END CAMBIAR LOGO EMPRESA




  // CONTADOR DE CARACTERES MENSAJE PLATAFORMA
  const mensaje = document.getElementById('mensajePlataforma');
  const contador = document.getElementById('contadorCaracteres');

  mensaje.addEventListener('input', function (e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
  });
  // END CONTADOR DE CARACTERES

  // UPLOAD PAGO PLANILLA
  $('.fileInput').change(function () {
    var numfiles = $(this)[0].files.length;
    var parent = $(this).closest('.input-file');
    parent.find('ins').remove();
    for (i = 0; i < numfiles; i++) {
      parent.append('<ins>' + $(this)[0].files[i].name + '</ins>')
    }
  });
  // END UPLOAD PAGO PLAMILLA

  // CHECK ALL
  $(function () {
    $('.checkAll').click(function () {
      if (this.checked) {
        $(".custom-checkboxes").prop("checked", true);
      } else {
        $(".custom-checkboxes").prop("checked", false);
      }
    });

    $(".custom-checkboxes").click(function () {
      var numberOfCheckboxes = $(".custom-checkboxes").length;
      var numberOfCheckboxesChecked = $('.custom-checkboxes:checked').length;
      if (numberOfCheckboxes == numberOfCheckboxesChecked) {
        $(".checkAll").prop("checked", true);
      } else {
        $(".checkAll").prop("checked", false);
      }
    });
  });
  // END CHECK ALL

  // $( '.select2' ).select2( {
  //   theme: 'bootstrap-5'
  // });

  $('.select2modal').each(function () {
    $(this).select2({
      theme: 'bootstrap-5',
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).data('placeholder'),
      dropdownParent: $(this).parent()
    });
  });

  // SHOW HIDE FECHA VALES
  $("input[name='radioProgAsignacionMasiva']").click(function () {
    if ($("#progAsignacionMasiva2").is(":checked")) {
      $("#contentFechaAsigMasiva").show();
    } else {
      $("#contentFechaAsigMasiva").hide();
    }
  });

  $("input[name='radioProgAsignacionIndividual']").click(function () {
    if ($("#progAsignacionIndividual2").is(":checked")) {
      $("#contentFechaAsigIndividual").show();
    } else {
      $("#contentFechaAsigIndividual").hide();
    }
  });

  $("input[name='radioFechaSaludo']").click(function () {
    if ($("#progSaludoCumple2").is(":checked")) {
      $("#contentFechaSaludoCumple").show();
    } else {
      $("#contentFechaSaludoCumple").hide();
    }
  });

  $("input[name='radioProgAsignacionIndividualVale']").click(function () {
    if ($("#progAsignacionIndividualVale2").is(":checked")) {
      $("#contentFechaAsigIndividualVale").show();
    } else {
      $("#contentFechaAsigIndividualVale").hide();
    }
  });

  $("input[name='radioProgAsignacionMasivaVale']").click(function () {
    if ($("#progAsignacionMasivaVale2").is(":checked")) {
      $("#contentFechaAsigMasivaVale").show();
    } else {
      $("#contentFechaAsigMasivaVale").hide();
    }
  });
  // END SHOW HIDE FECHA VALES



  // SPINNER-VALE    
  $('.add').click(function () {
    var selectedInput = $(this).prev('.input-spinner');
    selectedInput[0].stepUp(1);
  });

  $('.sub').click(function () {
    var selectedInput = $(this).next('.input-spinner');
    selectedInput[0].stepDown(1);
  });


  // END SPINNER VALE


});





