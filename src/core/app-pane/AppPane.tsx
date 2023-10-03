import { Card } from "flowbite-react";
import { AppInstance } from "../../types/app";
import { motion } from "framer-motion";
import { RefObject } from "react";

/**
 * An app-pane is what contains the actual app-instance.
 * The pane or "window" is what can be dragged around and resized.
 */
export function AppPane(props: {
  appInstance: AppInstance;
  desktopRef: RefObject<Element>;
}) {
  const { appInstance, desktopRef } = props;

  // TODO: implement resizing
  // TODO: implement "render" of the given app.
  return (
    <motion.div drag dragConstraints={desktopRef}>
      <Card>
        <pre>{JSON.stringify(appInstance, null, 2)}</pre>
      </Card>
    </motion.div>
  );
}
