import React from 'react';
import { Checkbox, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import FormControlLabel from '@mui/material/FormControlLabel';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    variant: {
      options : [ 'light', 'darker'],
      control : 'select',
    },
    color: {
      options: ['primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <FormControlLabel control={<Checkbox {...args} />} label = {args.label} />
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  checked : true,
  disabled : false,
  size: 'medium',
  label : 'Label'
};