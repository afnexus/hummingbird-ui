"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = exports.darkTheme = void 0;

var _styles = require("@mui/material/styles");

var _utils = require("@mui/utils");

var _typography = require("./typography");

var _colorpalette = require("./colorpalette");

//MUI imports
//local imports
// Common settings across both light and dark themes
var commonSettings = Object.assign({}, _typography.typography); // Merging light theme palette and common settings

var lightTheme = (0, _styles.createTheme)((0, _utils.deepmerge)(_colorpalette.lightcolorpalette, commonSettings)); // Merging dark theme palette and common settings

exports.lightTheme = lightTheme;
var darkTheme = (0, _styles.createTheme)((0, _utils.deepmerge)(_colorpalette.darkcolorpalette, commonSettings));
exports.darkTheme = darkTheme;