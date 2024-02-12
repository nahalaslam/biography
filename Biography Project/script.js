$(document).ready (function(){
    $(".animation-image").waypoints(function() {
        $(".animation-image").addClass("animate__animted animate__fadeInLeft");
    }, {offset: "50%"});
});