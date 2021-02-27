console.log('js is loading');

$(document).ready(function() {
    var hamburger = $('[data-toggle="collapse"]');
    hamburger.click(function(event) {
        event.preventDefault();
        $('#hamburger-icon').toggleClass('active');
        var nav = hamburger.parents('nav');
        nav.toggleClass('expanded');
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) { 
            $('[data-action="scroll"]').addClass('show');
        } else { 
            $('[data-action="scroll"]').removeClass('show')
        } 
    }); 

    $('[data-action="scroll"]').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 500);
    });

    //waypoints
    var waypointsAbout = $('body [data-action="fade-in"]').waypoint({
        handler: function(direction) {
            if (direction == "down") {
                $(this.element).addClass("fade-in");
            }
        },
        offset: '90%'
    })
});