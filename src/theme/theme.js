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
      //letterSpacing:'2%',
      lineHeight:'88px',
    },
    h2:{
      fontFamily: 'LatoBold',
      fontSize: 64,
      //letterSpacing: '2%',
      lineHeight:'72px',
    },
    h3:{
      fontFamily: 'LatoBlack',
      fontSize: 48,
      //letterSpacing:'7.5px',
      lineHeight:'56px',
    },
    h4:{
      fontFamily: 'LatoBlack',
      fontSize: 32,
      //letterSpacing:'-0.9px',
      lineHeight:'40px',
    },
    h5:{
      fontFamily: 'LatoBlack',
      fontSize: 24,
      //letterSpacing:'3.6px',
      lineHeight:'32px',
    },
    h6:{
      fontFamily: 'LatoBlack',
      fontSize: 16,
      //letterSpacing:'3px',
      lineHeight:'24px',
    },


    subtitle1:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      //letterSpacing:'2.5px',
      lineHeight:'24px',
      fontWeight:"500", //Use 500 cus no have LatoMedium Font type

    },
    subtitle2:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      //letterSpacing:'2px',
      lineHeight:'22px',
      fontWeight:"500", //Use 500 cus no have LatoMedium Font type
    },

    body1:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      //letterSpacing:'0.24px',
      lineHeight:'24px',

    },
    body2:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      //letterSpacing:'0.24px',
      lineHeight:'22px',
    },


    buttonLarge:{
      fontFamily: 'LatoBold',
      fontSize: 16,
      //letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },
    buttonMedium:{
      fontFamily: 'LatoBold',
      fontSize: 14,
      //letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },
    buttonSmall:{
      fontFamily: 'LatoBold',
      fontSize: 12,
      //letterSpacing:'-1.28px',
      textTransform: 'uppercase',
    },

    caption:{
      fontFamily: 'LatoRegular',
      fontSize: 12,
      //letterSpacing:'1.6px',
      lineHeight:'20px',
    },
    inputLabel:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      //letterSpacing:'1.55px',
      lineHeight:'24px',
    },
    helpText:{
      fontFamily: 'LatoRegular',
      fontSize: 12,
      //letterSpacing:'0.9px',
      lineHeight:'20px',
    },
    inputText:{
      fontFamily: 'LatoRegular',
      fontSize: 16,
      //letterSpacing:'1.45px',
      lineHeight:'24px',
    },
    toolTip:{
      fontFamily: 'LatoRegular',
      fontSize: 14,
      //letterSpacing:'0.05px',
      lineHeight:'22px',
    },
  },
});
