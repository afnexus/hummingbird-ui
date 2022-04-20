import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={muitheme}>
            <Button variant='contained' color='primary'>{props.text}</Button>
            <h1> Heading 1 </h1>
            <h2> Heading 2 </h2>
            <h3> Heading 1 </h3>
            <h4> Heading 2 </h4>
            <h5> Heading 1 </h5>
            <h6> Heading 2 </h6>
        </ThemeProvider>


    );
}

export default ButtonWithMUI;