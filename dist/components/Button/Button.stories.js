"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _theme = require("../../theme/theme");

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Components/Button',
  component: _material.Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_material.ThemeProvider, {
    theme: _theme.lightTheme
  }, /*#__PURE__*/_react.default.createElement(_material.Button, args, "Hello"));
};

var Default = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Default = Default;
Default.args = {
  color: 'primary',
  variant: 'contained'
};