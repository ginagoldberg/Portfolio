$(function(){

  $(".tabs").on("click", function(e){
    // Change active tab
    $(".tabs").removeClass("active");
    $(this).addClass("active");
    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass("hidden");
    // Show target tab-content (use class="hidden")
    tabSelector = $(this).data("target");
    $(tabSelector).removeClass("hidden");
    // Scroll to the content
    $('html,body').animate({
        scrollTop: $(tabSelector).offset().top},
        'slow');
  });

});


$("button").click(function() {

});
