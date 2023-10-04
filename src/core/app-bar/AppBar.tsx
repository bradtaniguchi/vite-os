import { Navbar } from "flowbite-react";
import { AppIconButton } from "./AppIconButton";
import { useCallback, useContext } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";
import { AppBarInstanceButton } from "./AppBarInstanceButton";
import { AppInstance } from "../../types/app";

/**
 * The AppBar is shown on the side/bottom of the screen and contains
 * the main pinned applications, along with the "AppMenu" button
 */
export function AppBar() {
  const { appInstances } = useContext(AppContext) ?? {};
  const dispatch = useContext(AppContextDispatch);

  const handleAppBarInstanceButtonClick = useCallback(
    (app: AppInstance) => {
      if (app.viewState === "minimized") {
        if (dispatch)
          dispatch({
            type: "MAXIMIZE_APP",
            appInstanceId: app.instanceId,
          });
      }
    },
    [dispatch]
  );

  return (
    <Navbar fluid rounded id="app-bar" className="m-1">
      <div className="flex flex-row align-middle w-full">
        <div className="flex w-full">
          <AppIconButton />
          {(appInstances ?? []).map((appInstance) => (
            <AppBarInstanceButton
              key={appInstance.instanceId}
              appInstance={appInstance}
              onClick={handleAppBarInstanceButtonClick}
            />
          ))}
        </div>
        <div>{/* side icons will go here later */}</div>
      </div>
    </Navbar>
  );
}
