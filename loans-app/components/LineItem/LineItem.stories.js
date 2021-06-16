import React from "react";

import LineItem from "./";

export default {
  title: "Business Logic/LineItem",
  component: LineItem,
  argTypes: {},
};

const Template = (args) => <LineItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: "1",
    title: "Voluptate et sed tempora qui quisquam.",
    tranche: "A",
    available: "11,959",
    annualised_return: "8.60",
    term_remaining: "864000",
    ltv: "48.80",
    amount: "85,754",
  },
};

export const UserInvested = Template.bind({});
UserInvested.args = {
  item: {
    id: "1",
    title: "Voluptate et sed tempora qui quisquam.",
    tranche: "A",
    available: "11,959",
    annualised_return: "8.60",
    term_remaining: "864000",
    ltv: "48.80",
    amount: "85,754",
    userInvested: true,
  },
};
