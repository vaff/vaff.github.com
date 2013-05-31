"use strict";

define(["jquery","menu","header"],
function ($     , menu,  header) {

  function init () {
    console.log("-- init app");

    console.log("---- starting menu");
    menu.init("#menu");

    console.log("---- starting header");
    header.init("#header");
  };


  return {
    init: init
  };
});
