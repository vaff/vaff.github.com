"use strict";

define(["jquery","menu","header"],
function ($     , menu,  header) {
  /**
   * Initializes this model.
   */
  var init = function () {
    console.log("----- init app");

    console.log("----- starting menu");
    menu.init();

    console.log("----- starting header");
    header.init("#header");
  };


  return {
    init: init
  };
});
