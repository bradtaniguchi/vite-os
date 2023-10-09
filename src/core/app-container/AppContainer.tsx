import { useCallback, useContext, useRef } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";
import { AppBar } from "../app-bar/AppBar";
import { AppList } from "../app-list/AppList";
import { AppPane } from "../app-pane/AppPane";
import { motion } from "framer-motion";
import { AppInstance } from "../../types/app";

/**
 * Component that renders the desktop environment where apps can reside.
 * This also acts as a framer-motion reference for drag and drop of windows.
 */
export function AppContainer() {
  const desktopRef = useRef(null);

  const { listOpened, appInstances } = useContext(AppContext) ?? {};
  const dispatch = useContext(AppContextDispatch);

  const handleOnClose = useCallback(
    (app: AppInstance) => {
      if (dispatch)
        dispatch({ type: "CLOSE_APP", appInstanceId: app.instanceId });
    },
    [dispatch]
  );

  const handleOnMinimize = useCallback(
    (app: AppInstance) => {
      if (dispatch)
        dispatch({ type: "MINIMIZE_APP", appInstanceId: app.instanceId });
    },
    [dispatch]
  );

  const handleOnMaximize = useCallback(
    (app: AppInstance) => {
      if (dispatch)
        dispatch({ type: "MAXIMIZE_APP", appInstanceId: app.instanceId });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col h-screen bg-green-300">
      <motion.div ref={desktopRef} className="flex-1 bg-green-300" id="desktop">
        {listOpened && <AppList />}
        {appInstances
          ?.filter(({ viewState }) => viewState !== "minimized")
          ?.map((appInstance) => (
            <AppPane
              key={appInstance.id}
              appInstance={appInstance}
              desktopRef={desktopRef}
              onClose={handleOnClose}
              onMinimize={handleOnMinimize}
              onMaximize={handleOnMaximize}
            />
          ))}
      </motion.div>

      <AppBar />
    </div>
  );
}
