import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const OuterBoxStyle = {
  margin:"10px", 
  marginLeft:"10%",
  marginRight:"10%",
}

const OuterText = {
  textAlign:"center",
}

ProgressBar.defaultProps = {
  BarBackgroundColor: "#385682",
  BarColor:"#5297FF",
  value:"84",
  textColor:"#C7DDFF",
}


function ProgressBar(props) {
  const BarBackgroundColor = props.BarBackgroundColor;
  const BarColor = props.BarColor;


  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 19,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: BarBackgroundColor, //"#385682"
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: BarColor, //'#5297FF'
    },
  }));


  return (
    <>
        <Box sx={{alignItems: 'center' }}>
            <BorderLinearProgress style={OuterBoxStyle} variant="determinate" value={props.value} />

            <Box sx={{ minWidth: 35 }}>
                <Typography style={OuterText} variant="body2" color={props.textColor}>{`${Math.round(props.value,)}%`} Completed</Typography>
            </Box>
        </Box>
    </>

  );
}

export default ProgressBar;