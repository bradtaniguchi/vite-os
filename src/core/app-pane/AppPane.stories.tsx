import { Meta, StoryObj } from "@storybook/react";
import { AppPane } from "./AppPane";
import { HELLO_WORLD_APP } from "../../apps/hello-world/hello-world-def";
import { getId } from "../../utils/get-id";

const meta: Meta<typeof AppPane> = {
  component: AppPane,
};

export default meta;

type Story = StoryObj<typeof AppPane>;

export const HelloWorld: Story = {
  args: {
    appInstance: {
      ...HELLO_WORLD_APP,
      instanceId: getId(),
      viewState: "normal",
    },
  },
};
