import React from 'react';
import { Checkbox, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';
<<<<<<< HEAD
import { secondary } from '../../style/Colors/Colors';
=======
>>>>>>> PB
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
<<<<<<< HEAD
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    state : {
      options : [ 'Default', 'Focus', 'Hover'],
      control : 'radio',
    },
    disableRipple : {
      control : 'boolean',
    }
=======
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
>>>>>>> PB
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
<<<<<<< HEAD
  label : 'Label',
  state : 'Default',
  disableRipple : false,
};


export const FocusState = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FocusState.args = {
  checked : true,
  disabled : false,
  size: 'medium',
  label : 'Label',
  sx : {
    backgroundColor : secondary[400],
    '&:hover' : {
      backgroundColor : secondary[100],
    }
  }
};

export const HoverState = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HoverState.args = {
  checked : true,
  disabled : false,
  size: 'medium',
  label : 'Label',
  sx : {
    backgroundColor : secondary[100],
    '&:hover' : {
      backgroundColor : secondary[100],
    }
  }
};
=======
  label : 'Label'
};
>>>>>>> PB
