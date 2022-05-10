"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = exports.darkTheme = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _styles = require("@mui/material/styles");

var _utils = require("@mui/utils");

require("../style/Typography/Typography.css");

var _Colors = require("../style/Colors/Colors");

var theme = (0, _styles.createTheme)(); // Common settings across both light and dark themes

var commonSettings = {
  typography: {
    //fontSize: 12,
    fontFamily: 'LatoRegular',
    h1: (0, _defineProperty2.default)({
      fontFamily: 'LatoBlack',
      fontSize: 80,
      letterSpacing: '1.6px',
      lineHeight: '88px'
    }, theme.breakpoints.down('sm'), {
      //width viewpoint below 840
      fontSize: 48,
      lineHeight: '56px'
    }),
    h2: (0, _defineProperty2.default)({
      fontFamily: 'LatoBlack',
      fontSize: 64,
      letterSpacing: '1.28px',
      lineHeight: '72px'
    }, theme.breakpoints.down('sm'), {
      fontSize: 32,
      lineHeight: '40px'
    }),
    h3: (0, _defineProperty2.default)({
      fontFamily: 'LatoBlack',
      fontSize: 48,
      letterSpacing: '0.96px',
      lineHeight: '56px'
    }, theme.breakpoints.down('sm'), {
      fontSize: 24,
      lineHeight: '32px'
    }),
    h4: (0, _defineProperty2.default)({
      fontFamily: 'LatoBlack',
      fontSize: 32,
      letterSpacing: '0.64px',
      lineHeight: '40px'
    }, theme.breakpoints.down('sm'), {
      fontSize: 22,
      lineHeight: '30px'
    }),
    h5: (0, _defineProperty2.default)({
      fontFamily: 'LatoBlack',
      fontSize: 24,
      letterSpacing: '0.48px',
      lineHeight: '32px'
    }, theme.breakpoints.down('sm'), {
      fontSize: 19,
      lineHeight: '27px'
    }),
    h6: {
      fontFamily: 'LatoBlack',
      fontSize: 16,
      letterSpacing: '0.32px',
      lineHeight: '24px'
    },
    subtitle1: {
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing: '0.32px',
      lineHeight: '24px',
      fontWeight: "500" //Use 500 cus no have LatoMedium Font type

    },
    subtitle2: {
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing: '0.28px',
      lineHeight: '22px',
      fontWeight: "500" //Use 500 cus no have LatoMedium Font type

    },
    body1: {
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing: '0.32px',
      lineHeight: '24px'
    },
    body2: {
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing: '0.28px',
      lineHeight: '22px'
    },
    buttonLarge: {
      fontFamily: 'LatoBold',
      fontSize: 16,
      letterSpacing: '0.32px' //textTransform: 'uppercase',

    },
    buttonMedium: {
      fontFamily: 'LatoBold',
      fontSize: 14,
      letterSpacing: '0.28px' //textTransform: 'uppercase',

    },
    buttonSmall: {
      fontFamily: 'LatoBold',
      fontSize: 12,
      letterSpacing: '0.24px' //textTransform: 'uppercase',

    },
    caption: {
      fontFamily: 'LatoRegular',
      fontSize: 12,
      letterSpacing: '0.24px',
      lineHeight: '20px'
    },
    inputLabel: {
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing: '0.32px',
      lineHeight: '24px'
    },
    helpText: {
      fontFamily: 'LatoRegular',
      fontSize: 12,
      letterSpacing: '0.24px',
      lineHeight: '20px'
    },
    inputText: {
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing: '0.32px',
      lineHeight: '24px'
    },
    toolTip: {
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing: '0.28px',
      lineHeight: '22px'
    }
  }
}; // Merging light theme palette and common settings

var lightTheme = (0, _styles.createTheme)((0, _utils.deepmerge)({
  palette: {
    mode: "light",
    background: {
      paper: '#fff',
      default: '#fff'
    },
    primary: {
      main: _Colors.primary[400],
      contrastText: _Colors.neutrals[50]
    },
    secondary: {
      main: _Colors.secondary[400],
      contrastText: _Colors.neutrals[1000]
    },
    success: {
      main: _Colors.green[600],
      contrastText: _Colors.neutrals[1000]
    },
    error: {
      main: _Colors.red[600],
      contrastText: _Colors.neutrals[50]
    },
    warning: {
      main: _Colors.yellow[600],
      contrastText: _Colors.neutrals[1000]
    },
    info: {
      main: _Colors.purple[600],
      contrastText: _Colors.neutrals[50]
    }
  }
}, commonSettings)); // Merging dark theme palette and common settings

exports.lightTheme = lightTheme;
var darkTheme = (0, _styles.createTheme)((0, _utils.deepmerge)({
  palette: {
    mode: 'dark',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    primary: {
      main: _Colors.nPrimary[400],
      contrastText: _Colors.nNeutrals[50]
    },
    secondary: {
      main: _Colors.nSecondary[400],
      contrastText: _Colors.nNeutrals[900]
    },
    success: {
      main: _Colors.nGreen[600],
      contrastText: _Colors.nNeutrals[900]
    },
    error: {
      main: _Colors.nRed[600],
      contrastText: _Colors.nNeutrals[50]
    },
    warning: {
      main: _Colors.nYellow[600],
      contrastText: _Colors.nNeutrals[900]
    },
    info: {
      main: _Colors.nPurple[600],
      contrastText: _Colors.nNeutrals[50]
    }
  }
}, commonSettings));
exports.darkTheme = darkTheme;