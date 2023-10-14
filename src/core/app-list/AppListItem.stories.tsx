import { Meta, StoryObj } from "@storybook/react";
import { AppListItem } from "./AppListItem";
import { HELLO_WORLD_APP } from "../../apps/hello-world/hello-world-def";

const meta: Meta<typeof AppListItem> = {
  component: AppListItem,
};

export default meta;

type Story = StoryObj<typeof AppListItem>;

export const HelloWorld: Story = {
  args: {
    app: HELLO_WORLD_APP,
  },
};
