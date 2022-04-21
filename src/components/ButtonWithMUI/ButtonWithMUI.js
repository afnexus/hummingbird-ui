import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { dayMode } from '../../theme/theme';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={dayMode}>
            <Button variant='contained' color='neutral'>{props.text}</Button>
        </ThemeProvider>
    );
}

export default ButtonWithMUI;