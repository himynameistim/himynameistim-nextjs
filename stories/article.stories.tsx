import React, { ComponentProps } from 'react';
import { RichTextBlock, Elements } from "prismic-reactjs";

import { Story } from '@storybook/react';

import { Article, DisplayMode } from '../components/article';

export default {
  title: 'Article',
  component: Article,
};

const Template: Story<ComponentProps<typeof Article>> = (args) => <Article {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  article: {
    uid: "string",
    type: "string",
    data: {
      title: [{type: Elements.heading1,
        text: "string",
        //spans?: null,
        alt: "string",
        copyright: "string",
       // dimensions?: null,
       // url?: null,
       // linkTo?: null,
        oembed: null}],
      post_date: new Date(),
      image: {
        url: "string"
      },
      body: "any",
      category : {
        name: "string"
      },
      _meta: {
        tags: ["hello"]
      }
    },
  },
  displayMode: DisplayMode.Article
};