import React from 'react';
import ProgressBar from './ProgressBar';
import { primary, neutrals } from '../../style/Colors/Colors';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
}

const Template = (args) => <ProgressBar {...args} />

export const Default = Template.bind({});
Default.args = {
  BarBackgroundColor: neutrals[100],
  BarColor: primary[400],
  TextColor: primary[400]
};