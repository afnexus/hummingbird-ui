import { createTheme } from '@mui/material/styles';
// import Colors.js file here

export const muitheme = createTheme({
  palette: {
    primary: {
      main: '#800080',
    },
    secondary: {
      main: '#edf2ff',
    },
  },

  typography: {
    fontFamily: 'SerpentineSans',
    fontSize: 12,
    //fontWeightRegular:'400',

    h1:{
      fontFamily: 'SerpentineSans',
      fontSize: 96,
      letterSpacing:'15.36px',
    },

    h2:{
      fontFamily: 'SerpentineSans',
      fontSize: 64,
      letterSpacing: '10px',
    },

    h3:{
      fontFamily: 'SerpentineSans',
      fontSize: 48,
      letterSpacing:'7.5px',
    },

    h4:{
      fontFamily: 'SerpentineSans',
      fontSize: 36,
      letterSpacing:'-0.9px',
    },

    h5:{
      fontFamily: 'EurocineOblique',
      fontSize: 24,
      letterSpacing:'3.6px',
    },

    h6:{
      fontFamily: 'EurocineRegular',
      fontSize: 20,
      letterSpacing:'3px',
    },

    subtitle1:{
      fontFamily: 'EurocineOblique',
      fontSize: 16,
      letterSpacing:'2.5px',

    },
    subtitle2:{
      fontFamily: 'EurocineOblique',
      fontSize: 14,
      letterSpacing:'2px',

    },

    body1:{
      fontFamily: 'EurocineRegular',
      fontSize: 16,
      letterSpacing:'0.24px',

    },
    body2:{
      fontFamily: 'EurocineRegular',
      fontSize: 14,
      letterSpacing:'0.24px',

    },

    buttonLarge:{
      fontFamily: 'EurocineRegular',
      fontSize: 15,
      letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },
    buttonMedium:{
      fontFamily: 'EurocineRegular',
      fontSize: 14,
      letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },
    buttonSmall:{
      fontFamily: 'EurocineRegular',
      fontSize: 13,
      letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },

    caption:{
      fontFamily: 'EurocineRegular',
      fontSize: 12,
      letterSpacing:'1.6px',
    },
    inputLabel:{
      fontFamily: 'EurocineRegular',
      fontSize: 12,
      letterSpacing:'1.55px',
    },
    helpText:{
      fontFamily: 'EurocineRegular',
      fontSize: 12,
      letterSpacing:'0.9px',
    },
    inputText:{
      fontFamily: 'EurocineRegular',
      fontSize: 16,
      letterSpacing:'1.45px',
    },
    toolTip:{
      fontFamily: 'EurocineRegular',
      fontSize: 10,
      letterSpacing:'0.05px',
    },
  },
});
