
$(function() {
    $("#move-left").click(function() {
        $(".demo-box").animate({
            "marginLeft": "-=50px"
        });
    });

    $("#move-right").click(function() {
        $(".demo-box").animate({
            "marginLeft": "+=50px"
        });
    });

    $("#move-up").click(function() {
        $(".demo-box").animate({
            "marginTop": "-=50px"
        });
    });

    $("#move-down").click(function() {
        $(".demo-box").animate({
            "marginTop": "+=50px"
        });
    });

});
