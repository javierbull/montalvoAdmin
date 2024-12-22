$(document).ready(function () {


  // INCREMENTO - DECREMENTO =================

  $('.qtybutton').on('click', function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // FIN INCREMENTO - DECREMENTO

  // BTN FAVORITE
  $(".favorite").click(function () {
    $(this).toggleClass("far fas");
  });
  // FIN BTN FAVORITE

  // OPEN FILTER MOBILE

  $('#btnFilterMobile').click(function () {
    $('.filter-mobile').animate({
      left: 0
    }, 300);
    $('.header-filter-mobile').animate({
      left: 0
    }, 300);
    $('.footer-filter-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN FILTER MOBILE

  // CLOSE FILTER MOBILE
  $('.closeFilterMobile').click(function () {
    $('.filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.header-filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.footer-filter-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE FILTER MOBILE

  // OPEN MAIN MENU MOBILE
  $('#btnMenuMobile').click(function () {
    $('.main-menu-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN MAIN MENU MOBILE

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuMobile').click(function () {
    // $('.wrap-categorias').hide();
    $('.main-menu-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE MAIN MENU MOBILE

  // OPEN MENU PEFIL MOBILE
  $('#btnMenuPerfilMobile').click(function () {
    $('.menu-perfil-mobile').animate({
      left: 0
    }, 300);
  });

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuPerfilMobile').click(function () {
    // $('.wrap-categorias').hide();
    $('.menu-perfil-mobile').animate({
      left: '-110%'
    }, 300);
  });
  // FIN OPEN MENU PERFIL MOBILE

  // OPEN SEARCHER MENU MOBILE
  $('#btnSearcherMobile').click(function () {
    $('.searcher-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN SEARCHER MENU MOBILE

  // CLOSE SEARCHER MENU MOBILE
  $('.closeSearcherMobile').click(function () {
    // $('.wrap-categorias').hide();
    $('.searcher-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE SEARCHER MENU MOBILE

  // OPEN ORDER MENU MOBILE
  $('#btnOrderMobile').click(function () {
    $('.menu-order-mobile').animate({
      right: 0
    }, 300);
  });
  // FIN OPEN ORDER MENU MOBILE

  // CLOSE ORDER MENU MOBILE
  $('.closeOrderMobile').click(function () {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  $('.form-group-customRadio .custom-radio').click(function () {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  // FIN CLOSE ORDER MENU MOBILE

  // MOVIE TRAILER
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video").attr('src');

  /* Remove iframe src attribute on page load to
  prevent autoplay in background */
  $("#video").attr('src', '');

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
  $("#modalTrailer").on('shown.bs.modal', function () {
    $("#video").attr('src', url);
  });

  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#modalTrailer").on('hide.bs.modal', function () {
    $("#video").attr('src', '');
  });
  // FIN MOVIE TRAILER

  // TOOLTIP
  $('[data-toggle="tooltip"]').tooltip();
  // FIN TOOLTIP

  // FILE INPUT
  $(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  // END FILE INPUT


  $('[data-toggle="tooltip"]').tooltip();

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  $("#customPersonaCargoYo").click(function () {
    $("#boxCargoPedidoDeliveryOtro").hide();
    $("#boxCargoPedidoDeliveryYo").show();
  });

  $("#customPersonaCargoOtro").click(function () {
    $("#boxCargoPedidoDeliveryOtro").show();
    $("#boxCargoPedidoDeliveryYo").hide();
  });

  $("#radioEntregaDelivery").click(function () {
    $("#datosEntregaDelivery").show();
    $("#datosEntregaOficina").hide();
  });

  $("#radioEntregaOficina").click(function () {
    $("#datosEntregaDelivery").hide();
    $("#datosEntregaOficina").show();
  });

  $("#customPersonaCargoRecojoYo").click(function () {
    $("#boxCargoPedidoOficinaOtro").hide();
    $("#boxCargoPedidoOficinaYo").show();
  });

  $("#customPersonaCargoRecojoOtro").click(function () {
    $("#boxCargoPedidoOficinaOtro").show();
    $("#boxCargoPedidoOficinaYo").hide();
  });

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  // SHOW HIDE FIELDSET NUEVA DIRECCION
  $("#guardar-direccion").click(function () {
    $("#fieldset-primera-direccion").hide();
    $("#fieldset-datos-envio").show();
  });
  // END SHOW HIDE FIELDSET NUEVA DIRECCION

  // SHOW BTNS EDIT PERFIL
  $("#edit-datosPersonales").click(function () {
    $(".wrap-content-btn-perfil").show();
    $("#edit-datosPersonales").hide();
  });

  $("#cancelar-edit-datosPersonales").click(function () {
    $(".wrap-content-btn-perfil").hide();
    $("#edit-datosPersonales").show();
  });
  // END SHOW BTNS EDIT PERFIL

  // UPLOAD PICTURE PROFILE
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });

  // END UPLOAD PICTURE PROFILE

  // ACCORDION FILTER

  $(".accordion-card-header").click(function () {
    $(".accordion-less").toggleClass("show hide");
    $(".accordion-more").toggleClass("show hide");
  });

  $(".accordion-header-vales").click(function () {
    $(".accordion-less-vales").toggleClass("show hide");
    $(".accordion-more-vales").toggleClass("show hide");
  });

  $(".accordion-header-envio").click(function () {
    $(".accordion-less-envio").toggleClass("show hide");
    $(".accordion-more-envio").toggleClass("show hide");
  });

  $(".accordion-header-delivery").click(function () {
    $(".accordion-less-delivery").toggleClass("show hide");
    $(".accordion-more-delivery").toggleClass("show hide");
  });

  $(".accordion-header-delivery-proveedor").click(function () {
    $(".accordion-less-delivery-proveedor").toggleClass("show hide");
    $(".accordion-more-delivery-proveedor").toggleClass("show hide");
  });
  // END ACCORDION FILTER

  // TIEMPO CAROUSEL PRINCIPAL HOME
  $('#main-carousel').carousel({
    interval: 4000
  })

  $('#carouselModal').carousel({
    interval: 4000
  })
  // END TIEMPO CAROUSEL PRINCIPAL HOME

  // Load modal
  $(function () {
    $("#modal-flyer-carousel").modal();
  });
  // End load modal


  // CITY SELECTOR PACKS
  $(function () {
    $('#citySelectorPacks').change(function () {
      $('.section-wrap-packs-cards').hide();
      $('#' + $(this).val()).show();
    });
  });
  // END CITY SELECTOR PACKS

  // TABS HOVER
  $('.nav-tabs-hover > li').click(function () {
    event.preventDefault();
    $(this).find('a').tab('show');
  });

  // END TABS HOVER

  // LOGO EMPRESA FORMULARIO PEDIDO GH
  $('#input-preview-img-gh').change(function () {
    var curElement = $('#preview-logo-empresa-gh');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
  // END LOGO EMPRESA FORMULARIO PEDIDO GH

  // Mostrar orden de compra
  $("#customCheckDatosOrdenCompra").click(function () {
    if ($(this).is(":checked")) {
      $(".ordenDeCompraBox").show();
    } else {
      $(".ordenDeCompraBox").hide();
    }
  });
  // End mostrar orden de compra

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

  // Active thumbnails
  $('.thumbnail-item').on('click', function () {
    $('.thumbnail-item').removeClass('thumbnail-item-focus');
    $(this).toggleClass('thumbnail-item-focus');
  })
  // end Active thumbnails

  // Hover zoom image


  // End hover zoom image



  // Datatables
  $('.dtable').DataTable({
    // scrollX: true,
    //para cambiar el lenguaje a español
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
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando...",
    }

  });

  // End datatables

  // Show hide panels admin
  $(".showAdminPanel-dashboard").click(function () {
    $("#dashboard-panel").show();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-valesSolicitados").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").show();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-colaboradores").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").show();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-empresa").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").show();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-contactos").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").show();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-sedes").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").show();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-nuevaSede").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").show();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-inhouse").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").show();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-cumples").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").show();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-asignarVales").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").show();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-formAsignarVale").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").show();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-valesAsignados").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").show();
    $("#colaboradoresValesAsignados-panel").hide();
  });

  $(".showAdminPanel-listadoColaboradoresVales").click(function () {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#contactos-panel").hide();
    $("#sedes-panel").hide();
    $("#nuevaSede-panel").hide();
    $("#inhouse-panel").hide();
    $("#cumples-panel").hide();
    $("#asignarVales-panel").hide();
    $("#formAsignarVale-panel").hide();
    $("#valesAsignados-panel").hide();
    $("#colaboradoresValesAsignados-panel").show();
  });
  // End show hide panels admin

  // show panels cumpleaños
  $(".show-panel-cumple-table").click(function () {
    $("#calendarCumples").hide();
    $("#panel-cumples-table").show();
  });

  $(".show-panel-cumple-calendar").click(function () {
    $("#calendarCumples").show();
    $("#panel-cumples-table").hide();
  });
  // end panels cumpleaños

  // SHOW ACTIVE FOCUS STEPPER

  $('#editar-empresa-input-preview-img').change(function () {
    var curElement = $('#editar-empresa-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });

  // ACTIVAR SELECT2
  $('.select2').select2({
    theme: "bootstrap4",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder')
  });

  $('.select2modal').each(function() {
    $(this).select2({
      theme: "bootstrap4",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).data('placeholder'),
      dropdownParent: $(this).parent()
    });
  });

  
  // END ACTIVAR SELECT2

});


/*
 * Zoomable item
 */

const Default = {
  initialZoom: 3,
  minZoom: 1.25,
  maxZoom: 4,
  zoomSpeed: 0.01
};

/*
* Class definition
*/

class Zoomable {
  constructor(element, config) {
    this.element = element;
    this.config = this._mergeConfig(config);

    const { initialZoom, minZoom, maxZoom } = this.config;

    this.zoomed = false;
    this.initialZoom = Math.max(Math.min(initialZoom, maxZoom), minZoom);
    this.zoom = this.initialZoom;

    this.img = element.querySelector(".zoomable-item__img");
    this.img.draggable = false;
    this.element.style.setProperty("--zoom", this.initialZoom);

    this._addEventListeners();
  }

  static get Default() {
    return Default;
  }

  _addEventListeners() {
    this.element.addEventListener("mouseover", () =>
      this._handleMouseover()
    );
    this.element.addEventListener("mousemove", (evt) =>
      this._handleMousemove(evt)
    );
    this.element.addEventListener("mouseout", () => this._handleMouseout());
    this.element.addEventListener("wheel", (evt) => this._handleWheel(evt));

    this.element.addEventListener("touchstart", (evt) =>
      this._handleTouchstart(evt)
    );
    this.element.addEventListener("touchmove", (evt) =>
      this._handleTouchmove(evt)
    );
    this.element.addEventListener("touchend", () => this._handleTouchend());
  }

  _handleMouseover() {
    if (this.zoomed) {
      return;
    }

    this.element.classList.add("zoomable-item--zoomed");

    this.zoomed = true;
  }

  _handleMousemove(evt) {
    if (!this.zoomed) {
      return;
    }

    const elPos = this.element.getBoundingClientRect();

    const percentageX = `${((evt.clientX - elPos.left) * 100) / elPos.width
      }%`;
    const percentageY = `${((evt.clientY - elPos.top) * 100) / elPos.height
      }%`;

    this.element.style.setProperty("--zoom-pos-x", percentageX);
    this.element.style.setProperty("--zoom-pos-y", percentageY);
  }

  _handleMouseout() {
    if (!this.zoomed) {
      return;
    }

    this.element.style.setProperty("--zoom", this.initialZoom);
    this.element.classList.remove("zoomable-item--zoomed");

    this.zoomed = false;
  }

  _handleWheel(evt) {
    if (!this.zoomed) {
      return;
    }

    evt.preventDefault();

    const newZoom = this.zoom + evt.deltaY * (this.config.zoomSpeed * -1);
    const { minZoom, maxZoom } = this.config;

    this.zoom = Math.max(Math.min(newZoom, maxZoom), minZoom);
    this.element.style.setProperty("--zoom", this.zoom);
  }

  _handleTouchstart(evt) {
    evt.preventDefault();

    this._handleMouseover();
  }

  _handleTouchmove(evt) {
    if (!this.zoomed) {
      return;
    }

    const elPos = this.element.getBoundingClientRect();

    let percentageX =
      ((evt.touches[0].clientX - elPos.left) * 100) / elPos.width;
    let percentageY =
      ((evt.touches[0].clientY - elPos.top) * 100) / elPos.height;

    percentageX = Math.max(Math.min(percentageX, 100), 0);
    percentageY = Math.max(Math.min(percentageY, 100), 0);

    this.element.style.setProperty("--zoom-pos-x", `${percentageX}%`);
    this.element.style.setProperty("--zoom-pos-y", `${percentageY}%`);
  }

  _handleTouchend(evt) {
    this._handleMouseout();
  }

  _mergeConfig(config) {
    return {
      ...this.constructor.Default,
      ...(typeof config === "object" ? config : {})
    };
  }
}

/*
* Implementation
*/

const zoomables = document.querySelectorAll(".zoomable-item");

for (const el of zoomables) {
  new Zoomable(el);
}

// End zoomable item






