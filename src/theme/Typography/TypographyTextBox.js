import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muitheme } from '../../theme/theme';
import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

function TypographyTextBox(props) {

    const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
        fontSize: '50%',
    },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: 'green',
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: 'transparent',
    },
    }));

    return (
        <ThemeProvider theme={muitheme}>
            <Typography variant={props.type}> <Root>  {props.text} </Root></Typography>   
        </ThemeProvider>
    );
}

export default TypographyTextBox;