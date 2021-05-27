import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import CategoryHeading from '../components/category-heading';

export default {
  title: 'Category Heading',
  component: CategoryHeading,
};

const Template: Story<ComponentProps<typeof CategoryHeading>> = (args) => <CategoryHeading {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  name: "Heading",
};