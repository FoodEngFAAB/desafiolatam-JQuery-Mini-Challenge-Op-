$(document).ready(function () {
    $("#btn").on("click", function () {
        $("#caja").css("background-color", "blue", "margin", "50px", "padding", "50px")
        $("#caja").css("padding", "50px")
    });


    $("#clickme").on('click', function () {
        $('ul').toggle(1000);

    })


})
