import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5297FF',
    },
  },
  shape: {
    borderRadius: 100, //didnt work
  },

});

const OuterBoxStyle = {
    backgroundColor:'#385682', 
    margin:"10px", 
    marginLeft:"10%",
    marginRight:"10%",
}

const OuterText = {
    textAlign:"center",
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 19,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

function ProgressBar(props) {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{alignItems: 'center' }}>
            <BorderLinearProgress style={OuterBoxStyle} variant="determinate" value={props.value} />

            <Box sx={{ minWidth: 35 }}>
                <Typography style={OuterText} variant="body2" color="#C7DDFF">{`${Math.round(props.value,)}%`} Completed</Typography>
            </Box>
        </Box>
    </ThemeProvider>
  );
}

export default ProgressBar;