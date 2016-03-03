"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sLogPrefix) {
    // eslint-disable-line func-style
    return function (oRequest, oResponse, fNext) {
        _zouti2.default.log("(" + oRequest.method + ") " + oRequest.url, sLogPrefix);
        fNext();
    };
};

var _zouti = require("zouti");

var _zouti2 = _interopRequireDefault(_zouti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }