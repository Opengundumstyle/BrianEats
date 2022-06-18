/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BrianEats.js":
/*!**************************!*\
  !*** ./src/BrianEats.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_geolocation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/geolocation.js */ \"./src/scripts/geolocation.js\");\n // import {func} from './scripts/another.js'\n// render map\n\nvar map, infoWindow;\n\nfunction initMap() {\n  map = new google.maps.Map(document.getElementById('map'), {\n    center: {\n      lat: 37.799034800120424,\n      lng: -122.40128762913366\n    },\n    zoom: 8\n  });\n  infoWindow = new google.maps.infoWindow();\n  var marker = new google.maps.Marker({\n    position: {\n      lat: 37.799034800120424,\n      lng: -122.40128762913366\n    },\n    map: map,\n    icon: \"https://img.icons8.com/nolan/1x/marker.png\"\n  }); //create button \n\n  var locationButton = document.createElement(\"button\");\n  locationButton.textContent = \"Pan to Current Location\";\n  locationButton.classList.add(\"custom-map-control-button\");\n  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);\n  locationButton.addEventListener(\"click\", function () {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition(function (position) {});\n    }\n  }); //add marker\n\n  function addMarker(location) {\n    var marker = new google.maps.Marker({\n      position: location,\n      map: map,\n      icon: \"https://img.icons8.com/nolan/1x/marker.png\"\n    });\n  }\n\n  addMarker({\n    lat: 38,\n    lng: -122\n  });\n  addMarker({\n    lat: 37.799034800120424,\n    lng: -121.40128762913366\n  });\n}\n\nwindow.initMap = initMap;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQnJpYW5FYXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7O0NBR0E7QUFFQTs7QUFFQSxJQUFJQyxHQUFKLEVBQVFDLFVBQVI7O0FBRUEsU0FBU0MsT0FBVCxHQUFrQjtFQUVmRixHQUFHLEdBQUcsSUFBSUcsTUFBTSxDQUFDQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBbUQ7SUFDcERDLE1BQU0sRUFBQztNQUFDQyxHQUFHLEVBQUMsa0JBQUw7TUFBeUJDLEdBQUcsRUFBRSxDQUFDO0lBQS9CLENBRDZDO0lBQ09DLElBQUksRUFBQztFQURaLENBQW5ELENBQU47RUFJQ1YsVUFBVSxHQUFHLElBQUlFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxVQUFoQixFQUFiO0VBRUQsSUFBTVcsTUFBTSxHQUFHLElBQUlULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUyxNQUFoQixDQUF1QjtJQUNyQ0MsUUFBUSxFQUFFO01BQUNMLEdBQUcsRUFBQyxrQkFBTDtNQUF5QkMsR0FBRyxFQUFFLENBQUM7SUFBL0IsQ0FEMkI7SUFFckNWLEdBQUcsRUFBQ0EsR0FGaUM7SUFHckNlLElBQUksRUFBQztFQUhnQyxDQUF2QixDQUFmLENBUmUsQ0FjbEI7O0VBQ0EsSUFBTUMsY0FBYyxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7RUFFQUQsY0FBYyxDQUFDRSxXQUFmLEdBQTZCLHlCQUE3QjtFQUNBRixjQUFjLENBQUNHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLDJCQUE3QjtFQUNBcEIsR0FBRyxDQUFDcUIsUUFBSixDQUFhbEIsTUFBTSxDQUFDQyxJQUFQLENBQVlrQixlQUFaLENBQTRCQyxVQUF6QyxFQUFxREMsSUFBckQsQ0FBMERSLGNBQTFEO0VBQ0FBLGNBQWMsQ0FBQ1MsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBSztJQUN0QyxJQUFHQyxTQUFTLENBQUNDLFdBQWIsRUFBeUI7TUFDbkJELFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQ1EsVUFBQ2QsUUFBRCxFQUFhLENBRVosQ0FIVDtJQUtMO0VBRVIsQ0FURCxFQXBCa0IsQ0ErQmxCOztFQUVJLFNBQVNlLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTRCO0lBQ3hCLElBQU1sQixNQUFNLEdBQUcsSUFBSVQsTUFBTSxDQUFDQyxJQUFQLENBQVlTLE1BQWhCLENBQXVCO01BQ3RDQyxRQUFRLEVBQUVnQixRQUQ0QjtNQUV0QzlCLEdBQUcsRUFBQ0EsR0FGa0M7TUFHdENlLElBQUksRUFBQztJQUhpQyxDQUF2QixDQUFmO0VBS0Y7O0VBRUFjLFNBQVMsQ0FBQztJQUFDcEIsR0FBRyxFQUFDLEVBQUw7SUFBU0MsR0FBRyxFQUFDLENBQUM7RUFBZCxDQUFELENBQVQ7RUFDQW1CLFNBQVMsQ0FBQztJQUFDcEIsR0FBRyxFQUFDLGtCQUFMO0lBQXlCQyxHQUFHLEVBQUUsQ0FBQztFQUEvQixDQUFELENBQVQ7QUFFTDs7QUFFRHFCLE1BQU0sQ0FBQzdCLE9BQVAsR0FBaUJBLE9BQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWFfamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL0JyaWFuRWF0cy5qcz8zNjMzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZ1bmMgZnJvbSAnLi9zY3JpcHRzL2dlb2xvY2F0aW9uLmpzJ1xuXG4vLyBpbXBvcnQge2Z1bmN9IGZyb20gJy4vc2NyaXB0cy9hbm90aGVyLmpzJ1xuXG4vLyByZW5kZXIgbWFwXG5cbmxldCBtYXAsaW5mb1dpbmRvdztcblxuZnVuY3Rpb24gaW5pdE1hcCgpeyBcblxuICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykse1xuICAgICAgICBjZW50ZXI6e2xhdDozNy43OTkwMzQ4MDAxMjA0MjQgLGxuZzogLTEyMi40MDEyODc2MjkxMzM2Nn0sIHpvb206OFxuICAgICAgfVxuICApO1xuICAgIGluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuaW5mb1dpbmRvd1xuXG4gICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjoge2xhdDozNy43OTkwMzQ4MDAxMjA0MjQgLGxuZzogLTEyMi40MDEyODc2MjkxMzM2Nn0sXG4gICAgbWFwOm1hcCxcbiAgICBpY29uOlwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9ub2xhbi8xeC9tYXJrZXIucG5nXCJcbiAgfSlcblxuLy9jcmVhdGUgYnV0dG9uIFxuY29uc3QgbG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cbmxvY2F0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJQYW4gdG8gQ3VycmVudCBMb2NhdGlvblwiXG5sb2NhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLW1hcC1jb250cm9sLWJ1dHRvblwiKVxubWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfQ0VOVEVSXS5wdXNoKGxvY2F0aW9uQnV0dG9uKVxubG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pe1xuICAgICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgIChwb3NpdGlvbikgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBcbn0pXG5cbi8vYWRkIG1hcmtlclxuXG4gICAgZnVuY3Rpb24gYWRkTWFya2VyKGxvY2F0aW9uKXtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgbWFwOm1hcCxcbiAgICAgICAgaWNvbjpcImh0dHBzOi8vaW1nLmljb25zOC5jb20vbm9sYW4vMXgvbWFya2VyLnBuZ1wiXG4gICAgICAgIH0pXG4gICAgIH1cblxuICAgICAgYWRkTWFya2VyKHtsYXQ6MzgsIGxuZzotMTIyfSlcbiAgICAgIGFkZE1hcmtlcih7bGF0OjM3Ljc5OTAzNDgwMDEyMDQyNCwgbG5nOiAtMTIxLjQwMTI4NzYyOTEzMzY2fSlcblxufVxuXG53aW5kb3cuaW5pdE1hcCA9IGluaXRNYXA7XG5cbiJdLCJuYW1lcyI6WyJmdW5jIiwibWFwIiwiaW5mb1dpbmRvdyIsImluaXRNYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImljb24iLCJsb2NhdGlvbkJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRyb2xzIiwiQ29udHJvbFBvc2l0aW9uIiwiVE9QX0NFTlRFUiIsInB1c2giLCJhZGRFdmVudExpc3RlbmVyIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJhZGRNYXJrZXIiLCJsb2NhdGlvbiIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/BrianEats.js\n");

/***/ }),

/***/ "./src/scripts/geolocation.js":
/*!************************************!*\
  !*** ./src/scripts/geolocation.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction func() {\n  console.log(\"hi brian\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (func);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nZW9sb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsU0FBU0EsSUFBVCxHQUFlO0VBQ1RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDTDs7QUFFRCwrREFBZUYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FhX2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dlb2xvY2F0aW9uLmpzPzk3MzgiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZnVuYygpe1xuICAgICAgY29uc29sZS5sb2coXCJoaSBicmlhblwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jOyJdLCJuYW1lcyI6WyJmdW5jIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/geolocation.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYV9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/BrianEats.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;