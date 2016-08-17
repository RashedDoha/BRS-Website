var roboarm = document.getElementById('roboarm');

window.onload = function() {
    roboarm.classList.add("animate");
    TweenMax.to("#arm", 1, {
        rotation: 15,
        delay: 4,
        transformOrigin: "20px 264px"
    });

}
