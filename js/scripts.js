$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});

$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
});

$(document).ready(function () {
  $(".para").click(function() {
    $(this).css('border', "solid 2px black");
  });
});
