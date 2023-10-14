import { Meta, StoryObj } from "@storybook/react";
import { AppList } from "./AppList";
import { AppProvider } from "../../context/AppContext";
import { HELLO_WORLD_APP } from "../../apps/hello-world/hello-world-def";

const meta: Meta<typeof AppList> = {
  component: AppList,
};

export default meta;

type Story = StoryObj<typeof AppList>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <AppProvider
        apps={[
          HELLO_WORLD_APP,
          HELLO_WORLD_APP,
          HELLO_WORLD_APP,
          HELLO_WORLD_APP,
        ]}
      >
        <Story />
      </AppProvider>
    ),
  ],
};
