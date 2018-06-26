(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loadedsecond"],{

/***/ "./src/components/loaded-second.module.js":
/*!************************************************!*\
  !*** ./src/components/loaded-second.module.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadedSecond = undefined;

var _angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loadedSecond = exports.loadedSecond = _angular2.default.module('loadedSecond', []).component('loadedSecond', {
    template: '<h1>Second lazy loaded module<h1>',
    controller: function loadedSecondComponent() {
        _classCallCheck(this, loadedSecondComponent);

        console.log('Second lazy loaded component is inited');
    },
    controllerAs: 'ctrl'
}).name;

/***/ })

}]);
//# sourceMappingURL=loadedsecond.bundle.js.map