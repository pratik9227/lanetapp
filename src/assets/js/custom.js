$("document").ready(function($){
    var nav = $('.menubg-custom');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("fixed-div");
        } else {
            nav.removeClass("fixed-div");
        }
    });
});