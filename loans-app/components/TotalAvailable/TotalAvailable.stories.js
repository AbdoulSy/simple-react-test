import React from 'react';

import TotalAvailable from './';

export default {
  title: 'Business Logic/TotalAvailable',
  component: TotalAvailable,
  argTypes: {},
};

const Template = (args) => <TotalAvailable {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalAvailable: '100000',
  label: 'Total available for investments',
  currency: 'USD',
  symbol: '$'
};




