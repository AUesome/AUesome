$("#video").hide();

(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
})(jQuery);

$(window).on("hashchange", function () {
  hash = window.location.hash;

  if (hash == "#home") {
    $("#title").text("AUesome Videos");
    $("#body").html(
      "Welcome to the AUesome videos! These videos are for parents to work with their children on our various activities. Under the videos dropdown, you can view different activities that you can work on with your kits. Currently, we have around eight activities released and will be released based on your kit level and in the future. In your kit, you will have items that can correspond with the videos. These vidoes can be watched by parents to work on developing you cognivite skills."
    );
    $("#video").hide();
    $(".videos").show();
  } else {
    $(".videos").hide();
  }

  if (hash == "#clothespin") {
    $("#title").text("Clothespin Activity");
    $("#body").html("In this activity, we will be using our clothespins.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/drlIj0OwLJY");
  }

  if (hash == "#spinner") {
    $("#title").text("Spinner Activity");
    $("#body").html("In this activity, we will be using our spinners.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/TEg59h_LfAc");
  }

  if (hash == "#match") {
    $("#title").text("Match Me!");
    $("#body").html("In this activity, we will be using our match me cards.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/fMYbWODfXNc");
  }

  if (hash == "#flashcards") {
    $("#title").text("Emotions Flashcards");
    $("#body").html(
      "In this activity, we will be using our emotion flashcards."
    );
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/zBRMl3tR1F8");
  }

  if (hash == "#texture") {
    $("#title").text("Texture Identification");
    $("#body").html(
      "In this activity, we will be doing texture identification."
    );
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/x3HvF5WUB7g");
  }

  if (hash == "#threading") {
    $("#title").text("Threading Activity");
    $("#body").html("In this activity, we will be using threading kit.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/DnDrTzn88qE");
  }

  if (hash == "#lego") {
    $("#title").text("Lego Building");
    $("#body").html("In this activity, we will be using our legos.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/Jcbzh0jzERQ");
  }

  if (hash == "#zoob") {
    $("#title").text("ZOOB Building");
    $("#body").html("In this activity, we will be using our zoob blocks.");
    $("#video").show();
    $("#video").prop("src", "https://www.youtube.com/embed/8tnyApSL5-A");
  }

  if (hash == "#contact") {
    $("#title").text("Contact");
    $("#body").html(
      "Thanks for using our video site! We are planning to transiation to an app soon, so be sure to sign up for future updates on our <a href='index.html'>home site</a>! Contact us at aueosme.co@gmail.com or hi.anshulg@gmail.com for any improvements!"
    );
    $("#video").hide();
    $(".videos").hide();
  }
});
