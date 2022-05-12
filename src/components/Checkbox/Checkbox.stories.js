import React from 'react';
import { Checkbox, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import { secondary } from '../../style/Colors/Colors';
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
  label : 'Label'
};


export const hover1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
hover1.args = {
  checked : true,
  disabled : false,
  label : 'Style1',
  sx : {
    ':hover' : {
      backgroundColor : secondary[100],
    }
  },
};


export const hover2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
hover2.args = {
  checked : true,
  disabled : false,
  label : 'Style2',
  sx : {
    ':hover' : {
      backgroundColor : secondary[400],
    }
  },
};