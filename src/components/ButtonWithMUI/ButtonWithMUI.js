import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { dayMode, nightMode } from '../../theme/theme';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={dayMode}>
            <Button variant='contained' color='primary'>{props.text}</Button>
        </ThemeProvider>
    );
}

export default ButtonWithMUI;