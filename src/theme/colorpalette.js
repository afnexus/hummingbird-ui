import { primary, secondary, neutrals, green, red, yellow, purple, nPrimary, nSecondary, nYellow, nRed, nPurple, nGreen, nNeutrals } from '../style/Colors/Colors';

export const lightcolorpalette = {
    palette: {
      mode: "light",
      background : {
        paper: '#fff',
        default : '#fff',
      },
      primary: {
        main: primary[400],
        contrastText : neutrals[50],
      },
      secondary: {
        main: secondary[400],
        contrastText : neutrals[1000],
      },
      success: {
        main: green[600],
        contrastText: neutrals[1000],
      },
      error: {
        main : red[600],
        contrastText : neutrals[50],
      },
      warning:{
        main : yellow[600],
        contrastText: neutrals[1000],
      },
      info:{
        main : purple[600],
        contrastText : neutrals[50],
      }
    },
  }

export const darkcolorpalette = {
    palette: {
      mode: 'dark',
      background : {
        paper: '#121212',
        default : '#121212',
      },
      primary: {
        main: nPrimary[400],
        contrastText : nNeutrals[50],
      },
      secondary: {
        main: nSecondary[400],
        contrastText : nNeutrals[900],
      },
      success:{
        main : nGreen[600],
        contrastText : nNeutrals[900],
      },
      error:{
        main: nRed[600],
        contrastText : nNeutrals[50],
      },
      warning:{
        main: nYellow[600],
        contrastText : nNeutrals[900],
      },
      info:{
        main:nPurple[600],
        contrastText : nNeutrals[50],
      }
    },
  }