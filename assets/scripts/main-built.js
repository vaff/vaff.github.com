/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

define("helper/domReady",[],function(){function u(e){var t;for(t=0;t<e.length;t+=1)e[t](s)}function a(){var e=o;i&&e.length&&(o=[],u(e))}function f(){i||(i=!0,n&&clearInterval(n),a())}function c(e){return i?e(s):o.push(e),c}var e,t,n,r=typeof window!="undefined"&&window.document,i=!r,s=r?document:null,o=[];if(r){if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,!1),window.addEventListener("load",f,!1);else if(window.attachEvent){window.attachEvent("onload",f),t=document.createElement("div");try{e=window.frameElement===null}catch(l){}t.doScroll&&e&&window.external&&(n=setInterval(function(){try{t.doScroll(),f()}catch(e){}},30))}document.readyState==="complete"&&f()}return c.version="2.0.1",c.load=function(e,t,n,r){r.isBuild?n(null):c(n)},c}),define("menu",["helper/domReady!","jquery"],function(e,t){function i(){n.find("a").each(function(e){var n=t(this),i=n.text().toUpperCase();i=i.indexOf("WRITINGS")>-1?"BLOG":i,r.toUpperCase().indexOf(i)!=-1&&n.addClass("current")})}function s(e){n=e,r=window.location.pathname,typeof e=="string"&&(n=t(e)),i(),console.log("------- menu started")}var n,r;return{init:s}}),function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n(),e(window).on("resize.fittext orientationchange.fittext",n)})}}(jQuery),define("lib/jquery.fitText",function(){}),define("header",["helper/domReady!","jquery","lib/jquery.fitText"],function(e,t,n){function f(e){e.fitText(.6)}function l(e){t.each(e,function(){function s(){t.each([o,r,i],function(){this.toggleClass("hover")})}var e=this,n=t(this),r=t("#"+n.data("link"));n.on({mouseenter:s,mouseleave:s})})}function c(e){var n=e;typeof e=="string"&&(n=t(e)),r=t("#fittext a"),i=n.find(".image"),o=n.find(".image-normal"),u=n.find(".image-hook"),a=n.find(".image-image"),l(u),f(r),console.log("------- header started")}var r,i,s,o,u,a;return{init:c}}),define("app/main",["jquery","menu","header"],function(e,t,n){function r(){console.log("-- init app"),console.log("---- starting menu"),t.init("#menu"),console.log("---- starting header"),n.init("#header")}return{init:r}}),define("app",["app/main"],function(e){return e}),require.config({baseUrl:"/assets/scripts",packages:["app"],shim:{"lib/jquery.fittext":{deps:["jquery"],exports:"jQuery.fn.fitText"}},paths:{jquery:["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min","./lib/jquery.1.9.1.min.js"]}}),require(["jquery","app"],function(e,t){t.init()}),define("main",function(){});