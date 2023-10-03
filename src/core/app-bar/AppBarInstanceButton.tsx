import { Tooltip } from "flowbite-react";
import { AppInstance } from "../../types/app";

/**
 * Button that represents a single App instance of an app.
 */
export function AppBarInstanceButton(props: { appInstance: AppInstance }) {
  const { appInstance } = props;
  return (
    <Tooltip content={appInstance.name}>
      <button type="button" aria-label="App instance icon">
        {appInstance.icon}
      </button>
    </Tooltip>
  );
}
