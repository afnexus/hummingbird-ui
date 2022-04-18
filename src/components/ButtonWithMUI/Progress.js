import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';


const theme = createTheme({
  palette: {
    primary: {
      main: '#5297FF',
    },
    shape:{
        borderRadius:"100px", //didnt work
    }
  },
});

const OuterBoxStyle = {
  backgroundColor:'#385682', 
  height:'19px', 
  margin:"10px", 
  borderRadius:"10px",
  marginLeft:"10%",
  marginRight:"10%",
}

const OutsideTextStyle = {
  textAlign:"center",
}


function ProgressBar(props) {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{alignItems: 'center' }}>
            <Box theme={theme} sx={{ width: '100%', mr: 1 }}>
                <LinearProgress style={OuterBoxStyle}  variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography style={OutsideTextStyle} variant="body2" color="#C7DDFF">{`${Math.round(props.value,)}%`} Completed</Typography>
            </Box>
        </Box>
    </ThemeProvider>

  );
}

export default ProgressBar;