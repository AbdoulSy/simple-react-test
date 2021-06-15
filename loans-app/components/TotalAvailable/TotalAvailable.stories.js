import React from 'react';

import TotalAvailable from './';

export default {
  title: 'Common/TotalAvailable',
  component: TotalAvailable,
  argTypes: {},
};

const Template = (args) => <TotalAvailable {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalAvailable: '100000',
  currency: 'USD',
  symbol: '$'
};




