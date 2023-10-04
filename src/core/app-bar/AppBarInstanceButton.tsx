import { Tooltip } from "flowbite-react";
import { AppInstance } from "../../types/app";
import { useCallback } from "react";

/**
 * Button that represents a single App instance of an app.
 */
export function AppBarInstanceButton(props: {
  appInstance: AppInstance;
  onClick: (app: AppInstance) => void;
}) {
  const { appInstance, onClick } = props;

  const handleOnClick = useCallback(() => {
    onClick(appInstance);
  }, [appInstance, onClick]);

  return (
    <Tooltip content={appInstance.name}>
      <button
        type="button"
        aria-label="App instance icon"
        onClick={handleOnClick}
      >
        {appInstance.icon}
      </button>
    </Tooltip>
  );
}
