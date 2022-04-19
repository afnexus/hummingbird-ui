import React from 'react';
import CardNoMUI from './CardNoMUI';
//import PIC from  '../../assets/images/download.png';

export default {
    title: 'Components/CardNoMUI',
    component: CardNoMUI,
    parameters: {
        componentSubtitle: 'Heading 1 Testing',
        docs: {
            description: {
            component: 'Heading 2 Testing',
            },
        },
    },
    argTypes: {
        Title: {
            control: {
                type: 'select',
            },
            options: ['About Us', 'Hello World', 'I am ...', 'Testing'],
        },
    },
}

const Template = args => <CardNoMUI {...args} />

export const Default = Template.bind({});
Default.args = {
    Title:"About us", 
    paragraph: "A brief description of who we are",
};
