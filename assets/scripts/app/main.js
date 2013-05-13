"use strict";

define(["jquery","menu"],
function ($     , menu) {
  /**
   * Initializes this model.
   */
  var init = function () {
    console.log("----- init app");

    console.log("----- starting menu");
    menu.init();
  };


  return {
    init: init
  };
});
