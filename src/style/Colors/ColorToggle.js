import { React, useState } from 'react';
import { Button, Box, Typography, ThemeProvider, Paper, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme/theme';

function ColorToggle() {
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // This function is triggered when the Button component is toggled
    const changeTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
            <Typography variant="h1">Sample</Typography>
            <Button 
                variant="contained"
                onClick= { changeTheme }
            >
            Click Me To Change the Theme
            </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default ColorToggle;
