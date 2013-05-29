"use strict";

define(['helper/domReady!',"jquery"],
function (doc      , $) {

  var $elem,
      pathname;


  function listen () {
      $elem.find("a").each(function (idx) {
          var $this = $(this),
              text  = $this.text().toUpperCase();

          text = text.indexOf("WRITINGS") > -1 ? "BLOG" : text;

          if (pathname.toUpperCase().indexOf(text) != -1) {
              $this.addClass("current");
          }
      });
  }


  function init (elm) {
    $elem = elm;

    pathname = window.location.pathname;

    if (typeof elm === "string") {
      $elem = $(elm);
    }

    listen();
    console.log("------- menu started");
  }


  return {
    init: init
  };
});
