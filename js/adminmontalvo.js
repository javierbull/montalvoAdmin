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