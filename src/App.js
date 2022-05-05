import './App.css';
import{ React, useState } from 'react';
import { Button, Box, Container, Typography, Paper, ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';

function App() {
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // This function is triggered when the Button component is toggled
    const changeTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Typography variant="h1">This is a H1 text</Typography>
          <Button 
            variant="contained"
            onClick= { changeTheme }
          >
          Click Me To Change the Theme
          </Button>
      </Box>

    </ThemeProvider>
  );
}

export default App;
