import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { AppBar } from "../app-bar/AppBar";
import { AppList } from "../app-list/AppList";

export function AppContainer() {
  // TODO: move ref to external context.
  const desktopRef = useRef();

  const { listOpened } = useContext(AppContext) ?? {};

  return (
    <div className="flex flex-col h-screen bg-green-300">
      <div
        className="flex-1 bg-green-300"
        id="desktop"
        ref={desktopRef.current}
      >
        {listOpened && <AppList />}
      </div>

      <AppBar />
    </div>
  );
}
