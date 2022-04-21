import { createTheme } from '@mui/material/styles';
import { Colors } from '../theme/Colors/Colors'

export const dayMode = createTheme({
  palette: {
    primary: {
      main: Colors.priDefault,
      light: Colors.priLight,
    },
    secondary: {
      main: Colors.secDefault,
    },
    neutral: {
      main: Colors.white,
    },
  },
});
