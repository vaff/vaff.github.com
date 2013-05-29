"use strict";

define(['helper/domReady!',"jquery"],
function (doc      , $) {

  var $elem,
      $portrait,
      $hooks,
      $images,
      $wrap;




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

    $wrap     = $elem.find(".image");
    $portrait = $elem.find(".image-normal");
    $hooks    = $elem.find(".image-hook");
    $images   = $elem.find(".image-image");

    listen($hooks);
    console.log("------- header started");
  }

  return {
    init: init
  };
});
