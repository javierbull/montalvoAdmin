$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#video").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#video").attr('src', '');

	/* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#modalTrailer").on('shown.bs.modal', function(){
        $("#video").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#modalTrailer").on('hide.bs.modal', function(){
        $("#video").attr('src', '');
    });
});
