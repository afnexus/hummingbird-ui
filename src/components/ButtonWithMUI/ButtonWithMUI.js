import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';
import { Typography } from '@mui/material';

function ButtonWithMUI(props) {
    return (
        <ThemeProvider theme={muitheme}>
            <Button variant='contained' color='primary'>{props.text}</Button>
            <br/>
            <Typography variant="h1">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h2">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h3">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h4">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h5">The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="h6">The quick brown fox jumps over the lazy dog</Typography> 
            
            <Button variant="buttonLarge"> buttonLarge </Button>
            <Button variant="buttonMedium"> buttonMedium </Button>
            <Button variant="buttonSmall"> buttonSmall </Button>
            
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>

            <Typography variant="caption">caption</Typography>          <br/>
            <Typography variant="inputLabel">inputLabel</Typography>    <br/>
            <Typography variant="helpText">helpText</Typography>        <br/>
            <Typography variant="inputText">inputText</Typography>      <br/>
            <Typography variant="toolTip">toolTip</Typography>          <br/>

        </ThemeProvider>


    );
}

export default ButtonWithMUI;