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
    //fontSize: 12,
    fontFamily:'LatoRegular',

    h1:{
      fontFamily: 'LatoBlack',
      fontSize: 80,
      letterSpacing:'1.6px',
      lineHeight:'88px',
    },
    h2:{
      fontFamily: 'LatoBlack',
      fontSize: 64,
      letterSpacing: '1.28px',
      lineHeight:'72px',
    },
    h3:{
      fontFamily: 'LatoBlack',
      fontSize: 48,
      letterSpacing:'0.96px',
      lineHeight:'56px',
    },
    h4:{
      fontFamily: 'LatoBlack',
      fontSize: 32,
      letterSpacing:'0.64px',
      lineHeight:'40px',
    },
    h5:{
      fontFamily: 'LatoBlack',
      fontSize: 24,
      letterSpacing:'0.48px',
      lineHeight:'32px',
    },
    h6:{
      fontFamily: 'LatoBlack',
      fontSize: 16,
      letterSpacing:'0.32px',
      lineHeight:'24px',
    },


    subtitle1:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing:'0.32px',
      lineHeight:'24px',
      fontWeight:"500", //Use 500 cus no have LatoMedium Font type

    },
    subtitle2:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing:'0.28px',
      lineHeight:'22px',
      fontWeight:"500", //Use 500 cus no have LatoMedium Font type
    },

    body1:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing:'0.32px',
      lineHeight:'24px',

    },
    body2:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing:'0.28px',
      lineHeight:'22px',
    },


    buttonLarge:{
      fontFamily: 'LatoBold',
      fontSize: 16,
      letterSpacing:'0.32px',
      //textTransform: 'uppercase',
    },
    buttonMedium:{
      fontFamily: 'LatoBold',
      fontSize: 14,
      letterSpacing:'0.28px',
      //textTransform: 'uppercase',
    },
    buttonSmall:{
      fontFamily: 'LatoBold',
      fontSize: 12,
      letterSpacing:'0.24px',
      //textTransform: 'uppercase',
    },

    caption:{
      fontFamily: 'LatoRegular',
      fontSize: 12,
      letterSpacing:'0.24px',
      lineHeight:'20px',
    },
    inputLabel:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing:'0.32px',
      lineHeight:'24px',
    },
    helpText:{
      fontFamily: 'LatoRegular',
      fontSize: 12,
      letterSpacing:'0.24px',
      lineHeight:'20px',
    },
    inputText:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      letterSpacing:'0.32px',
      lineHeight:'24px',
    },
    toolTip:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      letterSpacing:'0.28px',
      lineHeight:'22px',
    },


  },
});
