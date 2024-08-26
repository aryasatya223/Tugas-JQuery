$(document).ready(function() {
    //efek hide
    $('#hide').click(function() {
        $('#kotak').hide("100");
    });

    //efek show
    $('#show').click(function(){
        $('#kotak').show("100");
    });

    //efek fade out
    $('#fadeOut').click(function() {
        $('.box1').fadeOut(100);
        $('.box2').fadeOut(200);
        $('.box3').fadeOut(300);
    });

    //efek fadein
    $('#fadeIn').click(function(){
        $('.box1').fadeIn(100);
        $('.box2').fadeIn(200);
        $('.box3').fadeIn(300);
    });

    //efek fade toggle
    $('#fadeToggle').click(function() {
        $('.box1').fadeToggle(100);
        $('.box2').fadeToggle(200);
        $('.box3').fadeToggle(300);
    });

    //efek fadeto
    $('#fadeTo').click(function() {
        $('.box1').fadeTo("slow",0.2);
        $('.box2').fadeTo("slow",0.3);
        $('.box3').fadeTo("slow",0.4);
    });

    //efek slide up
    $('#slideUp').click(function() {
        $('#slide').slideUp("slow");
    });
    //efek slide down
    $('#slideDown').click(function() {
        $('#slide').slideDown(1000)
    });
    //efek slide toggle
    $('#slideToggle').click(function() {
        $('#slide').slideToggle(1000)
    });

    //efek animate
    $('#kiri').click(function() {
        $('#animate-box').animate({'left' : "-=50px"}, "slow");
    });
    $('#kanan').click(function() {
        $('#animate-box').animate({'right':"-=50px"}, "slow");
    });

    //efek clearqueue
    $('#start').click(function() {
        $('#clearQueue-Box').animate({left: '+=500'}, 5000)
        $('#clearQueue-Box').queue(function() {
        });
    });

    $('#stop').click(function() {
        $('#clearQueue-Box').clearQueue();
        $('#clearQueue-Box').stop();
    });
    //efek delay
    $('#delay').click(function() {
        $('#kotak-satu').slideUp(4000).delay(6000).fadeIn(4000);
        $('#kotak-dua').slideUp(4000).fadeIn(4000);

    })
});