"use strict";

require.config({
  baseUrl: "/assets/scripts",
  shim: {
    "lib/jquery.fittext": {
        deps: ["jquery"],
        exports: "jQuery.fn.fitText"
    }
  },
  paths: {
    jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "lib/jquery-1.9.1.min.js"]
  }
});

require([
  "jquery",
  "app"
], function ($, app) {

  // this loads jquery and your app file
  app.init();
});
