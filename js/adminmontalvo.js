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

    // Shoe paneld admin
    $(".showAdminPanel-dashboard").click(function () {
        $("#dashboard-panel").show();
        $("#pedidos-panel").hide();
        $("#nuevoPedido-panel").hide();
    });

    $(".showAdminPanel-pedidos").click(function () {
        $("#dashboard-panel").hide();
        $("#pedidos-panel").show();
        $("#nuevoPedido-panel").hide();
    });


});