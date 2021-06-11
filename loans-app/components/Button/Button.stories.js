import React from 'react';

import { Button } from './';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};

