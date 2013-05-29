"use strict";

define(['helper/domReady!',"jquery","lib/jquery.fitText"],
function (doc             , $      , fitText) {

  var $txt,
      $wrap,
      $elem,
      $portrait,
      $hooks,
      $images;


  function fitLogo ($elm) {
    $elm.fitText(.6);
  }

  function listen($elems) {
    $.each($elems, function () {
      var self = this,
          $this = $(this),
          $image = $("#"+$this.data("link"));

      function toggle () {
        $.each([$portrait, $image, $wrap], function () {
          this.toggleClass("hover");
        });
      }

      $this.on({
        mouseenter: toggle,
        mouseleave: toggle
      });
    });
  }

  function init (elm) {
    var $elem = elm;

    if (typeof elm === "string") {
      $elem = $(elm);
    }

    $txt      = $("#fittext a");
    $wrap     = $elem.find(".image");
    $portrait = $elem.find(".image-normal");
    $hooks    = $elem.find(".image-hook");
    $images   = $elem.find(".image-image");

    listen($hooks);
    fitLogo($txt);
    console.log("------- header started");
  }

  return {
    init: init
  };
});
