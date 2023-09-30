import { Navbar } from "flowbite-react";
import { AppIconButton } from "./AppIconButton";

/**
 * The AppBar is shown on the side/bottom of the screen and contains
 * the main pinned applications, along with the "AppMenu" button
 */
export function AppBar() {
  return (
    <Navbar fluid rounded id="app-bar" className="m-1">
      <div className="flex flex-row align-middle w-full">
        <div className="flex w-full">
          <AppIconButton />
          {/* pinned icons will go here */}
        </div>
        <div>{/* side icons will go here later */}</div>
      </div>
    </Navbar>
  );
}
