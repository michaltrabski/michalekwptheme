!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="js",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mtToggle=t.addClass=t.removeClass=void 0,t.removeClass=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n=document.querySelectorAll(e);n.forEach((function(e){for(var o=0,n=t;o<n.length;o++){var r=n[o];e.classList.remove(r)}}))},t.addClass=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n=document.querySelectorAll(e);n.forEach((function(e){for(var o=0,n=t;o<n.length;o++){var r=n[o];e.classList.add(r)}}))},t.mtToggle=function(){document.querySelectorAll(".mttoggle").forEach((function(e){e.addEventListener("click",(function(){e.querySelectorAll("[data-toggle]").forEach((function(e){var t=e.getAttribute("data-toggle");t&&e.classList.toggle(t)}))}))}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),r=o(0),u=o(3);n.mtbox1(),r.mtToggle(),u.topMenu(),u.topMenuSearch(),console.log("dziala!")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mtbox1=void 0;var n=o(0);t.mtbox1=function(){document.querySelectorAll("#mtbox1 .btn").forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("data-index");n.addClass("#mtbox1 .btn","btn-outline-white"),n.removeClass("#mtbox1 .btn","btn-white","mtbtn--white"),n.addClass('#mtbox1 .btn[data-index="'+e+'"]',"btn-white","mtbtn--white"),n.removeClass("#mtbox1 .mtbox1__btn-content","active"),n.addClass('#mtbox1 .mtbox1__btn-content[data-index="'+e+'"]',"active")}))}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.topMenu=t.topMenuSearch=void 0,t.topMenuSearch=function(){var e=document.querySelector(".mttopmenu__ul"),t=document.querySelector(".mttopmenu__searchform"),o=document.querySelector(".mttopmenu__searchform .mttopmenu__searchforminput"),n=document.querySelector(".mttopmenu__searchform .mttopmenu__searchformbutton"),r=!1,u=window.innerWidth;e&&t&&o&&n?(u>=768&&(t.addEventListener("click",(function(e){e.preventDefault()})),n.addEventListener("click",(function(e){r?(console.log("form submited"),t.submit(),t.reset()):(console.log("closed => opend"),r=!0,o.classList.add("mtactive"),o.focus())}))),document.addEventListener("click",(function(e){e&&(t.contains(e.target)?console.log("inside"):(console.log("outside"),r=!1,o.classList.remove("mtactive")))}))):console.log("FALSE returned by => (menu && form && input && button)")},t.topMenu=function(){var e=document.querySelector(".mttopmenu"),t=document.querySelectorAll(".mttopmenu__ul li"),o=Number(e.getAttribute("data-mtdelay"))||200,n=Number(e.getAttribute("data-mtfade-duration"))||600;t.forEach((function(e){var t,r;e.addEventListener("mouseover",(function(){this.classList.add("mtactive"),this.classList.remove("mtfade"),clearTimeout(t),clearTimeout(r)})),e.addEventListener("mouseleave",(function(){var e=this;t=setTimeout((function(){e.classList.add("mtfade")}),o),r=setTimeout((function(){e.classList.remove("mtactive","mtfade")}),o+n)}))}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbXRyYWJza2kvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9tdHJhYnNraS90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbXRyYWJza2kvdHMvbXRib3gxLnRzIiwid2VicGFjazovLy8uL210cmFic2tpL3RzL21lbnUudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUZyb20iLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXN0IiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGRDbGFzcyIsImFkZFRvIiwidG8iLCJhZGQiLCJtdFRvZ2dsZSIsImFyZWEiLCJhZGRFdmVudExpc3RlbmVyIiwiZWwiLCJjbGFzc1RvVG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlIiwibXRib3gxIiwidG9wTWVudSIsInRvcE1lbnVTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiYnRuIiwidGhpcyIsIm1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybSIsImlucHV0IiwiYnV0dG9uIiwiaXNPcGVuIiwiaW5uZXJXaWR0aCIsIndpbmRvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdCIsInJlc2V0IiwiZm9jdXMiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwibGlzIiwiZGVsYXkiLCJOdW1iZXIiLCJmYWRlRHVyYXRpb24iLCJsaSIsInRpbWVvdXQxIiwidGltZW91dDIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIs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WkQsUUFBUUMsSUFBSSxXQUNaUSxHQUFTLEVBQ1RGLEVBQU12QixVQUFVQyxPQUFPLGtCQUs3QmUsUUFBUUMsSUFBSSwyREFJSCxFQUFBSCxRQUFVLFdBQ3JCLElBR01NLEVBQU8xQixTQUFTMkIsY0FIVCxjQUlQZSxFQUFNMUMsU0FBU0MsaUJBSFQscUJBS04wQyxFQUFRQyxPQUFPbEIsRUFBS1QsYUFBYSxrQkFBb0IsSUFDckQ0QixFQUFlRCxPQUFPbEIsRUFBS1QsYUFBYSwwQkFBNEIsSUFFMUV5QixFQUFJeEMsU0FBUSxTQUFDNEMsR0FDWCxJQUFJQyxFQUNBQyxFQUNKRixFQUFHaEMsaUJBQWlCLGFBQWEsV0FDL0JXLEtBQUtuQixVQUFVSyxJQUFJLFlBQ25CYyxLQUFLbkIsVUFBVUMsT0FBTyxVQUN0QjBDLGFBQWFGLEdBQ2JFLGFBQWFELE1BRWZGLEVBQUdoQyxpQkFBaUIsY0FBYyxzQkFFaENpQyxFQUFXRyxZQUFXLFdBQ3BCLEVBQUs1QyxVQUFVSyxJQUFJLFlBQ2xCZ0MsR0FDSEssRUFBV0UsWUFBVyxXQUNwQixFQUFLNUMsVUFBVUMsT0FBTyxXQUFZLFlBQ2pDb0MsRUFBUUUiLCJmaWxlIjoibXRyYWJza2lfX2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwianNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKHJlbW92ZUZyb206IHN0cmluZywgLi4ucmVzdDogc3RyaW5nW10pID0+IHtcclxuICBjb25zdCBmcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChyZW1vdmVGcm9tKTtcclxuICBmcm9tLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGZvciAoY29uc3QgaW5kZXggb2YgcmVzdCkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGFkZFRvOiBzdHJpbmcsIC4uLnJlc3Q6IHN0cmluZ1tdKSA9PiB7XHJcbiAgY29uc3QgdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFkZFRvKTtcclxuICB0by5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHJlc3QpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGluZGV4KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtdFRvZ2dsZSA9ICgpID0+IHtcclxuICBjb25zdCBhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXR0b2dnbGVcIik7XHJcbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xyXG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50c1RvVG9nZ2xlID0gYXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlXVwiKTtcclxuICAgICAgZWxlbWVudHNUb1RvZ2dsZS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzVG9Ub2dnbGUgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInh4eFwiLCBjbGFzc1RvVG9nZ2xlKVxyXG4gICAgICAgIGlmIChjbGFzc1RvVG9nZ2xlKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInl5XCIsIGVsLCBlbC5jbGFzc0xpc3QsIGNsYXNzVG9Ub2dnbGUpO1xyXG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc1RvVG9nZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IG10Ym94MSB9IGZyb20gXCIuL210Ym94MVwiO1xyXG5pbXBvcnQgeyBtdFRvZ2dsZSB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgdG9wTWVudVNlYXJjaCwgdG9wTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbm10Ym94MSgpO1xyXG5tdFRvZ2dsZSgpO1xyXG50b3BNZW51KCk7XHJcbnRvcE1lbnVTZWFyY2goKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiZHppYWxhIVwiKTtcclxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG10Ym94MSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIjbXRib3gxIC5idG5cIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xyXG5cclxuICAgICAgYWRkQ2xhc3MoXCIjbXRib3gxIC5idG5cIiwgXCJidG4tb3V0bGluZS13aGl0ZVwiKTtcclxuICAgICAgcmVtb3ZlQ2xhc3MoXCIjbXRib3gxIC5idG5cIiwgXCJidG4td2hpdGVcIiwgXCJtdGJ0bi0td2hpdGVcIik7XHJcbiAgICAgIGFkZENsYXNzKGAjbXRib3gxIC5idG5bZGF0YS1pbmRleD1cIiR7aX1cIl1gLCBcImJ0bi13aGl0ZVwiLCBcIm10YnRuLS13aGl0ZVwiKTtcclxuXHJcbiAgICAgIHJlbW92ZUNsYXNzKFwiI210Ym94MSAubXRib3gxX19idG4tY29udGVudFwiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgYWRkQ2xhc3MoYCNtdGJveDEgLm10Ym94MV9fYnRuLWNvbnRlbnRbZGF0YS1pbmRleD1cIiR7aX1cIl1gLCBcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgdG9wTWVudVNlYXJjaCA9ICgpID0+IHtcclxuICBjb25zdCB0cmFuc2l0aW9uID0gNjAwO1xyXG4gIGNvbnN0IGJyZWFrUG9pbnQgPSA3Njg7XHJcblxyXG4gIGNvbnN0IE1FTlUgPSBcIi5tdHRvcG1lbnVfX3VsXCI7XHJcbiAgY29uc3QgRk9STSA9IFwiLm10dG9wbWVudV9fc2VhcmNoZm9ybVwiO1xyXG4gIGNvbnN0IElOUFVUID0gXCIubXR0b3BtZW51X19zZWFyY2hmb3JtIC5tdHRvcG1lbnVfX3NlYXJjaGZvcm1pbnB1dFwiO1xyXG4gIGNvbnN0IEJVVFRPTiA9IFwiLm10dG9wbWVudV9fc2VhcmNoZm9ybSAubXR0b3BtZW51X19zZWFyY2hmb3JtYnV0dG9uXCI7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1FTlUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRk9STSkgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihJTlBVVCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJVVFRPTikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGxldCBpc09wZW4gPSBmYWxzZTtcclxuICBjb25zdCBpbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcclxuICBsZXQgaW5wdXRWYWx1ZSA9IFwiXCI7XHJcblxyXG4gIGlmIChtZW51ICYmIGZvcm0gJiYgaW5wdXQgJiYgYnV0dG9uKSB7XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+PSBicmVha1BvaW50KSB7XHJcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXRlZFwiKTtcclxuICAgICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIG9wZW4gbWVudVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWQgPT4gb3BlbmRcIik7XHJcbiAgICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm10YWN0aXZlXCIpO1xyXG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgaWYgY2xpY2tlZCBvdXRzaWRlIGZvcm1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGlzQ2xpY2tJbnNpZGUgPSBmb3JtLmNvbnRhaW5zKDxOb2RlPmV2ZW50IS50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAoaXNDbGlja0luc2lkZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3V0c2lkZVwiKTtcclxuICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcIm10YWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRkFMU0UgcmV0dXJuZWQgYnkgPT4gKG1lbnUgJiYgZm9ybSAmJiBpbnB1dCAmJiBidXR0b24pXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b3BNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IE1FTlUgPSBcIi5tdHRvcG1lbnVcIjtcclxuICBjb25zdCBMSVMgPSBcIi5tdHRvcG1lbnVfX3VsIGxpXCI7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1FTlUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChMSVMpIGFzIE5vZGVMaXN0T2Y8SFRNTExJRWxlbWVudD47XHJcblxyXG4gIGNvbnN0IGRlbGF5ID0gTnVtYmVyKG1lbnUuZ2V0QXR0cmlidXRlKFwiZGF0YS1tdGRlbGF5XCIpKSB8fCAyMDA7XHJcbiAgY29uc3QgZmFkZUR1cmF0aW9uID0gTnVtYmVyKG1lbnUuZ2V0QXR0cmlidXRlKFwiZGF0YS1tdGZhZGUtZHVyYXRpb25cIikpIHx8IDYwMDtcclxuXHJcbiAgbGlzLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBsZXQgdGltZW91dDE6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xyXG4gICAgbGV0IHRpbWVvdXQyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcclxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJtdGFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwibXRmYWRlXCIpO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dDEpO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dDIpO1xyXG4gICAgfSk7XHJcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIHRoaXMpO1xyXG4gICAgICB0aW1lb3V0MSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm10ZmFkZVwiKTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICB0aW1lb3V0MiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcIm10YWN0aXZlXCIsIFwibXRmYWRlXCIpO1xyXG4gICAgICB9LCBkZWxheSArIGZhZGVEdXJhdGlvbik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==