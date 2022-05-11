import React from 'react';
import { Switch, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../theme/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <Switch {...args} />
</ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
