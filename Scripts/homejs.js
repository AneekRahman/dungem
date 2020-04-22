$(".helpDiv").hide()
$(document).ready(function(){
    /* THE EXPLORE SECTION SLIDE IN/OUT HERE */
    $("#helpBtn").click(function(){
        $(".helpDiv").slideDown();
        $('html, body').animate({ scrollTop:1000 }, 400);
    })
    /* THE JUMBOTRON FADE IN ANIMATION HERE */
    $('.jumbotron').hide();
    $('.jumbotron').fadeIn(2000);
});