import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SectionHeading from '../components/section-heading';

export default {
  title: 'Section Heading',
  component: SectionHeading,
};

const Template: Story<ComponentProps<typeof SectionHeading>> = (args) => <SectionHeading {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  heading: "Heading",
  link: "http://www.himynameistim.com/"
};