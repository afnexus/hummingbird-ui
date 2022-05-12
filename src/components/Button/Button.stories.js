import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
        options: ['primary', 'secondary','success','error','info','warning'],
        control: { type: 'select' },
      },
    variant: {
        options: ['contained','outlined','text'],
        control: { type: 'select' },
    },
    size: {
        options: ['small', 'medium','large'],
        control: { type: 'select' },
    },
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <Button {...args}>Hello</Button>
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    color: 'primary',
    variant: 'contained'
};