"use strict";

define(["jquery"],
function ($) {

  var $elem,
      $portrait,
      $hooks,
      $images;

  function listenToHooks($elems) {
    $.each($elems, function () {
      var self = this,
          $this = $(this),
          $image = $("#"+$this.data("link"));

      $this.on({
        mouseenter: function () {
          $portrait.toggleClass("hover");
          $image.toggleClass("hover");
        },
        mouseleave: function () {
          $portrait.toggleClass("hover");
          $image.toggleClass("hover");
        }
      });
    });
  }

  function init (elm) {
    var $elem = elm;

    if (typeof elm === "string") {
      $elem = $(elm);
    }

    $portrait = $elem.find(".image-normal");
    $hooks    = $elem.find(".image-hook");
    $images   = $elem.find(".image-image");

    listenToHooks($hooks);
    console.log("------ header started");
  }

  return {
    init: init
  };
});
