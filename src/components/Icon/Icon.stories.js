import React from 'react';
import { Icon, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    fontSize: {
      options: ['inherit', 'small', 'medium', 'large'],
      control: { type: 'select' },
  },
    color: {
      options: ['inherit', 'action', 'disabled', 'primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
    state: {
      options: ['Default', 'hover', 'focus' ],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <DeleteIcon {...args}/>
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  color:"primary",
  sx: {backgroundColor:"red",borderRadius:"50%" },
};