import { Navbar } from "flowbite-react";
import { AppIconButton } from "./AppIconButton";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AppBarInstanceButton } from "./AppBarInstanceButton";

/**
 * The AppBar is shown on the side/bottom of the screen and contains
 * the main pinned applications, along with the "AppMenu" button
 */
export function AppBar() {
  const { appInstances } = useContext(AppContext) ?? {};

  return (
    <Navbar fluid rounded id="app-bar" className="m-1">
      <div className="flex flex-row align-middle w-full">
        <div className="flex w-full">
          <AppIconButton />
          {(appInstances ?? []).map((appInstance) => (
            <AppBarInstanceButton
              key={appInstance.instanceId}
              appInstance={appInstance}
            />
          ))}
        </div>
        <div>{/* side icons will go here later */}</div>
      </div>
    </Navbar>
  );
}
