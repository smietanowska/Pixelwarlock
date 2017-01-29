$(document).ready(function() {
    $('#myContainer').multiscroll({
        anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth'],
        menu: '#menu',
        easing: 'easeOutBack',
        afterLoad: function(anchorLink, index) {
            if (index == '1'){
                $('#menu').fadeIn(1000);
            } else if (index == '2') {
                $('#menu').fadeIn(1000);
                $('.box').fadeIn(1000);
            } else if (index == '3') {
                $('#menu').fadeIn(1000);
                $('.box').fadeIn(1000);
            } else if (index == '4') {
                $('#menu').fadeIn(1000);
                $('.lt2').fadeIn(1000);
            } else if (index == '5') {
                $('#menu').fadeIn(1000);
                $('.box').fadeIn(1000);
            }  else if (index == '6') {
                $('#menu').fadeIn(1000);
                $('.lt2').fadeIn(1000);
            } else if (index == '7') {
                $('#menu').fadeIn(1000);
                $('.box').fadeIn(1000);
            } else if (index == '8') {
                $('#menu').fadeIn(1000);
                $('.lt2').fadeIn(1000);
            } 
        },   
        onLeave: function(index, direction){
            if(index == '2' ) {
                $('.box').fadeOut(100);
            } else if (index == '4') {
                $('.lt2').fadeOut(100);
                $('.box').fadeOut(100);
            }  else if (index == '6') {
                $('.lt2').fadeOut(100);
                $('.box').fadeOut(100);
            }
        },       

    });
    

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    
});

