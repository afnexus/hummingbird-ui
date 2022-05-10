"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

var _material = require("@mui/material");

var _theme = require("../../theme/theme");

function ColorToggle() {
  // The light theme is used by default
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDarkTheme = _useState2[0],
      setIsDarkTheme = _useState2[1]; // This function is triggered when the Button component is toggled


  var changeTheme = function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
  };

  return /*#__PURE__*/_react.React.createElement(_material.ThemeProvider, {
    theme: isDarkTheme ? _theme.darkTheme : _theme.lightTheme
  }, /*#__PURE__*/_react.React.createElement(_material.CssBaseline, null), /*#__PURE__*/_react.React.createElement(_material.Paper, null, /*#__PURE__*/_react.React.createElement(_material.Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "40vh"
  }, /*#__PURE__*/_react.React.createElement(_material.Typography, {
    variant: "h1"
  }, "Sample"), /*#__PURE__*/_react.React.createElement(_material.Button, {
    variant: "contained",
    onClick: changeTheme
  }, "Click Me To Change the Theme"))));
}

var _default = ColorToggle;
exports.default = _default;