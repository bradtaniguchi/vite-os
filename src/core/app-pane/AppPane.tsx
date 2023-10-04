import { Card } from "flowbite-react";
import { AppInstance } from "../../types/app";
import { motion } from "framer-motion";
import { RefObject, useCallback, MouseEvent } from "react";
import {
  XCircleIcon,
  MinusCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/solid";

/**
 * An app-pane is what contains the actual app-instance.
 * The pane or "window" is what can be dragged around and resized.
 */
export function AppPane(props: {
  appInstance: AppInstance;
  desktopRef: RefObject<Element>;
  onClose: (appInstance: AppInstance) => void;
}) {
  const { appInstance, desktopRef, onClose } = props;

  const handleOnClose = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      onClose(appInstance);
    },
    [appInstance, onClose]
  );

  // TODO: implement resizing
  // TODO: implement "render" of the given app.
  return (
    <motion.div drag dragConstraints={desktopRef}>
      <Card>
        {/* <div className="bg-slate-500 w-full h-8">Header</div> */}
        <Card className="w-full h-8">
          <div className="flex flex-row justify-end p-2">
            {/* TODO: add secondary buttons to the left, for fancier features */}

            <button type="button" aria-label="minimize window">
              <MinusCircleIcon className="h-6 w-6" />
            </button>

            <button type="button" aria-label="maximize window">
              {/* TODO: this probably should change */}
              <WindowIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="close window"
              onClick={handleOnClose}
            >
              <XCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </Card>

        <div id={`panel-content-${appInstance.instanceId}`}>
          <pre>{JSON.stringify(appInstance, null, 2)}</pre>
        </div>
      </Card>
    </motion.div>
  );
}
