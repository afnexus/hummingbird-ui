import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={muitheme}>
            <Button variant='contained' color='primary'>{props.text}</Button>
        </ThemeProvider>
    );
}

export default ButtonWithMUI;