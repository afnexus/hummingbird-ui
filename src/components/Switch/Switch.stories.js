import React from 'react';
import { Switch, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import { FormControlLabel } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked:{
      control: 'boolean',
    },
    disabled:{
      control: 'boolean',
    },
    size: {
      options: ['small', 'medium',],
      control: { type: 'select' },
  },
    color: {
      options: ['primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
    label: {
      control: 'text',
    },
    variant: {
      options: ['Default', 'blue',],
      control: { type: 'select' },
    },
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <FormControlLabel control={<Switch {...args} />} label={args.label} />
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label : "Label",
  disabled: false,
};