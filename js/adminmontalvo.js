$(document).ready(function () {

    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

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

    // Show tipo envio de pedidos
    $("input[name='tipoEnvioPedido']").click(function () {
        if ($("#tipoEnvioPedido1").is(":checked")) {
            $("#pedidoEnvioIndividual").show();
        } else {
            $("#pedidoEnvioIndividual").hide();
        }
    });

    $("input[name='tipoEnvioPedido']").click(function () {
        if ($("#tipoEnvioPedido2").is(":checked")) {
            $("#pedidoEnvioMasivo").show();
        } else {
            $("#pedidoEnvioMasivo").hide();
        }
    });
    //   End Show tipo envio de pedidos

    // Select2
    $('.select2').each(function () {
        $(this).select2({
            theme: 'bootstrap-5',
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
            dropdownParent: $(this).parent()
        });
    });
    // End select2

    // Show panels admin
    $(".showAdminPanel-dashboard").click(function () {
        $("#dashboard-panel").show();
        $("#pedidos-panel").hide();
        $("#nuevoPedido-panel").hide();
        $("#giftcard-panel").hide();
        $("#codigos-panel").hide();
    });

    $(".showAdminPanel-pedidos").click(function () {
        $("#dashboard-panel").hide();
        $("#pedidos-panel").show();
        $("#nuevoPedido-panel").hide();
        $("#giftcard-panel").hide();
        $("#codigos-panel").hide();
    });

    $(".showAdminPanel-nuevoPedido").click(function () {
        $("#dashboard-panel").hide();
        $("#pedidos-panel").hide();
        $("#nuevoPedido-panel").show();
        $("#giftcard-panel").hide();
        $("#codigos-panel").hide();
    });

    $(".showAdminPanel-giftcard").click(function () {
        $("#dashboard-panel").hide();
        $("#pedidos-panel").hide();
        $("#nuevoPedido-panel").hide();
        $("#giftcard-panel").show();
        $("#codigos-panel").hide();
    });

    $(".showAdminPanel-codigos").click(function () {
        $("#dashboard-panel").hide();
        $("#pedidos-panel").hide();
        $("#nuevoPedido-panel").hide();
        $("#giftcard-panel").hide();
        $("#codigos-panel").show();
    });
    // End show panels admin

    // Show hide contents canje
    $(".show-content-canje-giftcard").click(function () {
        $("#content-canje-giftcard").show();
    });

    $(".show-confirm-canje-giftcard").click(function () {
        $("#confirm-canje-giftcard").show();
        $("#content-canje-giftcard").hide();
        $("#content-form-verify-giftcard").hide();
    });

    $(".show-canje-gifcard").click(function () {
        $("#confirm-canje-giftcard").hide();
        $("#content-form-verify-giftcard").show();
    });

    // End how hide contents canje

});