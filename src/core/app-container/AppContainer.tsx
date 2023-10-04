import { useCallback, useContext, useRef } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";
import { AppBar } from "../app-bar/AppBar";
import { AppList } from "../app-list/AppList";
import { AppPane } from "../app-pane/AppPane";
import { motion } from "framer-motion";
import { AppInstance } from "../../types/app";

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

  return (
    <div className="flex flex-col h-screen bg-green-300">
      <motion.div ref={desktopRef} className="flex-1 bg-green-300" id="desktop">
        {listOpened && <AppList />}
        {appInstances?.map((appInstance) => (
          <AppPane
            key={appInstance.id}
            appInstance={appInstance}
            desktopRef={desktopRef}
            onClose={handleOnClose}
          />
        ))}
      </motion.div>

      <AppBar />
    </div>
  );
}
