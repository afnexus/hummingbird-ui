import React from 'react';
import Progress from './Progress';

export default {
    title: 'Components/Progress',
    component: Progress,
    
};

const Template = args => <Progress {...args} />
 
export const Default = Template.bind({})
Default.args = {
    value:"84", 
    BarBackgroundColor:"#385682", 
    BarColor:"#5297FF", 
    textColor:"#C7DDFF",
}
export const Test = Template.bind({})
Test.args = {
    value:"20", 
    BarBackgroundColor:"black", 
    BarColor:"yellow", 
    textColor:"red",
}



//export const Default = () => <Progress value="84" BarBackgroundColor="#385682" BarColor="#5297FF" textColor="#C7DDFF"/>;