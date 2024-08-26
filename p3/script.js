$(document).ready(function(){
    //event click

    $('#click').click(function(){
        alert('Saya sedang belajar jquery');
    });

    //event dblclick
    $('#dblclick').dblclick(function() {
        $(this).css('background-color','red');
    });

    //event mouse leave
    $('.mouse').mouseleave(function() {
        $(this).css('background-color','skyblue')
    });

    //event mouse enter
    $('.mouse').mouseenter(function() {
        $(this).css('background-color', 'lime');
    });

    //event keydown
    $('#keydown').keydown(function() {
        $('#pesan_keydown').text($(this).val());
    });

        //event keyup
        $('#keyup').keyup(function() {
            $('#pesan_keyup').text($(this).val());
        });
});