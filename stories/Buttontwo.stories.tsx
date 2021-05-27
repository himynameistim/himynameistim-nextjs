import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Buttontwo, ButtontwoProps } from './Buttontwo';

export default {
  title: 'Example/ButtonTwo',
  component: Buttontwo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtontwoProps> = (args) => <Buttontwo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
