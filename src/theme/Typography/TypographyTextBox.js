import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';
import { Typography } from '@mui/material';


function TypographyTextBox(props) {
    return (
        <ThemeProvider theme={muitheme}>
            <Typography variant={props.type}> {props.text} </Typography>  
        </ThemeProvider>
    );
}

export default TypographyTextBox;