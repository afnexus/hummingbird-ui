import React from 'react';
import { Switch, ThemeProvider, FormControlLabel } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import { neutrals } from '../../style/Colors/Colors';
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
      options: [ 	'default', 'primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
    label: {
      control: 'text',
    },
    state: {
      options: ['Default', 'hover', 'focus' ],
      control: { type: 'radio' },
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
