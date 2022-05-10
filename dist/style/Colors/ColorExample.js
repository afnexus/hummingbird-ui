"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Colors = require("./Colors");

var _material = require("@mui/material");

function ColorExample() {
  return /*#__PURE__*/React.createElement(_material.Button, {
    style: {
      color: _Colors.primary[800],
      background: _Colors.primary[50]
    },
    variant: "contained"
  }, "Hello");
}

var _default = ColorExample;
exports.default = _default;