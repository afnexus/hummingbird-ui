import React from 'react';
import { Switch, ThemeProvider, FormControlLabel } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import { FormControlLabel } from '@mui/material';
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
<<<<<<< HEAD
    },

    color: {
      options: ['primary', 'secondary','success','error','info','warning'],
=======
  },
    color: {
      options: [ 	'default', 'primary', 'secondary','success','error','info','warning'],
>>>>>>> PB
      control: { type: 'select' },
    },
    label: {
      control: 'text',
<<<<<<< HEAD
    }
=======
    },
    state: {
      options: ['Default', 'hover', 'focus' ],
      control: { type: 'radio' },
    },
>>>>>>> PB
  },
}




const Template = (args) =>
<ThemeProvider theme={lightTheme}>
<<<<<<< HEAD
    <Switch {...args}/>
    <FormControlLabel control={<Switch {...args} />} label={args.label} />
=======
  <FormControlLabel control={<Switch {...args} />} label={args.label} />
>>>>>>> PB
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
<<<<<<< HEAD
};

Default.args = {
  label : "Label",
  sx : {
    '& .Mui-disabled' : { color : neutrals[200]}
  },
}
=======
  label : "Label",
  disabled: false,
};
>>>>>>> PB
