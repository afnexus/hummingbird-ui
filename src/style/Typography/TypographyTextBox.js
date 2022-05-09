import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../theme/theme';
import { Typography } from '@mui/material';


function TypographyTextBox(props) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Typography variant={props.type}> {props.text} </Typography>  
        </ThemeProvider>
    );
}

export default TypographyTextBox;