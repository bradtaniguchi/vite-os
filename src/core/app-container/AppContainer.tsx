import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { AppBar } from "../app-bar/AppBar";
import { AppList } from "../app-list/AppList";
import { AppPane } from "../app-pane/AppPane";
import { motion } from "framer-motion";

export function AppContainer() {
  const desktopRef = useRef(null);

  const { listOpened, appInstances } = useContext(AppContext) ?? {};

  return (
    <div className="flex flex-col h-screen bg-green-300">
      <motion.div ref={desktopRef} className="flex-1 bg-green-300" id="desktop">
        {listOpened && <AppList />}
        {appInstances?.map((appInstance) => (
          <AppPane
            key={appInstance.id}
            appInstance={appInstance}
            desktopRef={desktopRef}
          />
        ))}
      </motion.div>

      <AppBar />
    </div>
  );
}
