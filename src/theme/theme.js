import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Colors, primary, secondary, neutrals, green, red, yellow, orange, purple, nPrimary, nSecondary, nOrange, nYellow, nRed, nPurple, nGreen, nNeutrals } from '../theme/Colors/Colors'

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background : {
      paper: '#fff',
      default : '#fff',
    },
    primary: {
      main: primary[400],
      light : '#6276CE',
      dark : '#00246D',
      contrastText : neutrals[50],
    },
    secondary: {
      main: secondary[400],
      light : '#C4FFFF',
      dark : '#5FA0C0',
      contrastText : neutrals[1000],
    },
    success: {
      main: green[600],
      light : '#66E47C',
      dark : '#007E20',
      contrastText: neutrals[1000],
    },
    error: {
      main : red[600],
      light : '#FF6D63',
      dark : '#A10011',
      contrastText : neutrals[50],
    },
    warning:{
      main : yellow[600],
      light: '#FFFF75',
      dark : '#C1A600',
      contrastText: neutrals[1000],
    },
    info:{
      main : purple[600],
      light : '#CC50CF',
      dark : '#66006E',
      contrastText : neutrals[50],
    },
    
  },
});


export const darkTheme = createTheme({
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
});