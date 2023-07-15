$(document).ready(function(){

    // to make the html editor seen by default
    $("#result-editor").show();
    $("#html-editor").hide();
    $("#css-editor").hide();
    $("#js-editor").hide();


    // Toggle code containers
    $(".tab").click(function() {
        var activeTab = $(this).attr('id');
        $("#" + activeTab.replace('tab', 'editor')).toggle();
    });

    // Run button click event
    $("#run-btn").click(function () {
       var htmlCode = $("#html-editor").val();
       var cssCode = '<style>' + $("#css-editor").val() + '</style>';
       var jsCode = '<script>' + $("#js-editor").val() + '</script>';

       var allCodes = htmlCode + cssCode + jsCode;
       $("#result-frame").attr('srcdoc', allCodes);
    //the srcdoc attribute of the iframe ensures that the code is rendered as a webpage within the iframe
    });


});
