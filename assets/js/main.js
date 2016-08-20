var roboarm = document.getElementById('roboarm');

window.onload = function() {
    roboarm.classList.add("animate");
    TweenMax.to("#arm", 1, {
        rotation: 16,
        delay: 4,
        transformOrigin: "20px 264px"
    });


}

$(function() {
  $("#modal-trigger").click(function() {
      $("body").addClass("modal-open");
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $("body").removeClass("modal-open");
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
