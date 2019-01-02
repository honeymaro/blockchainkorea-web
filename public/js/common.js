$(document).ready(function(){
    var calculateHeightFromWindow = function (el) {
        var windowHeight = parseFloat($(window).height());
        var elements = el ? el : $(".calHeight");

        elements = elements.length ? elements : [elements];

        var i = 0;

        for (i = 0; i < elements.length; i++) {
            var element = $(elements[i]);
            var ratio = parseFloat($(element).attr("heightRatio"));
            ratio = ratio ? ratio : 1;
            $(element).css("height", windowHeight * ratio);
        }
    }

    $(window).on("resize", function () {
        calculateHeightFromWindow();

    });

    $(window).resize();
    $("body").on("click", function(e){
        if($(".header").has(e.target).length <= 0){
            $(".header-menu").removeClass("show");
        }
    });

    $("body").on("click", ".header-more", function(e){
        e.preventDefault();
        $(".header-menu").toggleClass("show");
    });

});