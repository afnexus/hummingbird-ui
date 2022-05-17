import React from 'react';
import { Icon, ThemeProvider, SvgIcon, IconButton } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    fontSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
  },
    color: {
      options: ['inherit', 'default', 'primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
    state: {
      options: ['Default', 'hover', 'focus' ],
      control: { type: 'radio' },
    },
    disabled:{
      control: 'boolean',
    },
  },
}

// Take icon from https://fonts.google.com/icons
const Template = (args) =>
<ThemeProvider theme={lightTheme}>

  <IconButton {...args}> 
    <Delete fontSize={args.fontSize} />
  </IconButton>
  
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  fontSize:"medium",
  state:"Default",
  disabled: false,
};