import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';
import { Typography } from '@mui/material';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={muitheme}>
            <Button variant='contained' color='primary'>{props.text}</Button>
            <Typography variant="h1">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h2">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h3">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h4">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h5">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h6">The quick brown fox jumps over the lazy dog</Typography> 

            <Typography variant="subtitle1">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="subtitle2">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
            
        </ThemeProvider>
    );
}

export default ButtonWithMUI;