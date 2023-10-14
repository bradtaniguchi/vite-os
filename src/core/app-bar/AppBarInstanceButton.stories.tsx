import { Meta } from "@storybook/react";
import { AppBarInstanceButton } from "./AppBarInstanceButton";
import { HELLO_WORLD_APP } from "../../apps/hello-world/hello-world-def";
import { getId } from "../../utils/get-id";

const meta: Meta<typeof AppBarInstanceButton> = {
  component: AppBarInstanceButton,
};

export default meta;

export const Default = () => (
  <AppBarInstanceButton
    appInstance={{
      ...HELLO_WORLD_APP,
      instanceId: getId(),
      viewState: "normal",
    }}
    onClick={() => {}}
  />
);
