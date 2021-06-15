import React from 'react';

import { Button } from './';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: 'Invest',
};

export const LogsSomethingWhenClicking = Template.bind({});
LogsSomethingWhenClicking.args = {
  label: 'Click Me',
  onClick: () => console.log("clicked")
};




