import {StoryFn, StoryObj} from '@storybook/react';
import {BlahButton} from "./BlahButton";

export default {
  title: 'BlahButton',
  tags: ['sequential-test-execution'],
  component: BlahButton,
} as StoryObj<typeof BlahButton>;

export const BlahButtonPrimaryStory: StoryFn<{label?:string}> = (args) => <BlahButton {...args} />;
export const BlahButtonPrimaryStory2: StoryFn<{label?:string}> = (args) => <BlahButton {...args} />;
export const BlahButtonPrimaryStory3: StoryFn<{label?:string}> = (args) => <BlahButton {...args} />;
export const BlahButtonPrimaryStory4: StoryFn<{label?:string}> = (args) => <BlahButton {...args} />;
BlahButtonPrimaryStory2.play = async ({ args }) => {
};
