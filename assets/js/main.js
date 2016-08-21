var roboarm = document.getElementById('roboarm');
var sign = document.getElementById('signUpBoard');
var arrow = document.getElementById('arrow');

window.onload = function() {
    var width = $(window).width();
    console.log(width);
    if(width > 430)
    {
        roboarm.classList.add("animate");
        TweenMax.to("#arm", 1, {
            rotation: 17,
            delay: 4,
            transformOrigin: "20px 264px",
            onComplete: myCallback
        });
    }
    else {
        TweenMax.to("#arm", 1, {
            rotation: 17,
            delay: 1,
            transformOrigin: "20px 264px",
            onComplete: myCallback
        });
    }




    new WOW().init();
}

function myCallback() {

}
