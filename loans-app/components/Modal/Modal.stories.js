import React from 'react';

import Modal from './';

export default {
  title: 'Common/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className="w-1/2 h-1/4 text-center align-center">Hello</p>,
  isOpen: true,
  setOpenState: () => {},
};




