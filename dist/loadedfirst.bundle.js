(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loadedfirst"],{

/***/ "./src/components/loaded-first.module.js":
/*!***********************************************!*\
  !*** ./src/components/loaded-first.module.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadedFirst = undefined;

var _angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loadedFirst = exports.loadedFirst = _angular2.default.module('loadedFirst', []).component('loadedFirst', {
    template: '<h1>First lazy loaded module<h1>',
    controller: function loadedFirstComponent() {
        _classCallCheck(this, loadedFirstComponent);

        console.log('First lazy loaded component is inited');
    },
    controllerAs: 'ctrl'
}).name;

/***/ })

}]);
//# sourceMappingURL=loadedfirst.bundle.js.map