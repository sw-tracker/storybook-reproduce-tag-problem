import { StoryFn, StoryObj } from '@storybook/react';
import {BlahButton2} from "./BlahButton2";

export default {
  title: 'BlahButton2',
  component: BlahButton2,
} as StoryObj<typeof BlahButton2>;

export const BlahButton2PrimaryStory: StoryFn<{label?:string}> = (args) => <BlahButton2 {...args} />;
export const BlahButton2PrimaryStory1: StoryFn<{label?:string}> = (args) => <BlahButton2 {...args} />;
export const BlahButton2PrimaryStory2: StoryFn<{label?:string}> = (args) => <BlahButton2 {...args} />;
BlahButton2PrimaryStory2.play = async ({ args }) => {
};
