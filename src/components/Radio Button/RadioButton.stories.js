import React from 'react';
import {  ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/RadioButton',
  component: Radio,
  argTypes: {
    checked : {
        control : 'boolean',
    },
      disabled : {
        control : 'boolean',
    },
      label : {
        control : 'text',
    },
      size: {
        options: ['small', 'medium','large'],
        control: { type: 'select' },
    },
    state : {
      options : [ 'Default', 'Focus', 'Hover'],
      control : 'radio',
    },
    disableRipple : {
      control : 'boolean',
    }
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <FormControlLabel control={<Radio {...args} />} label= {args.label} />
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    checked : false, 
    disabled : false, 
    label : '',
    size : 'medium',
    disableRipple : false, 
};