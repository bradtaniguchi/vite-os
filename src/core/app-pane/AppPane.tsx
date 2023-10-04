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
  onMinimize: (appInstance: AppInstance) => void;
  onMaximize: (appInstance: AppInstance) => void;
}) {
  const { appInstance, desktopRef, onMinimize, onMaximize, onClose } = props;

  const handleMinimize = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      onMinimize(appInstance);
    },
    [appInstance, onMinimize]
  );

  const handleMaximize = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      onMaximize(appInstance);
    },
    [appInstance, onMaximize]
  );

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
          {/* TODO: fix layout */}
          <div className="flex flex-row justify-between p-2">
            {/* TODO: add secondary buttons to the left, for fancier features */}
            <div>
              {appInstance.icon}
              {appInstance.name}
            </div>

            <div>
              {(() => {
                if (
                  appInstance.viewState === "maximized" ||
                  appInstance.viewState === "normal"
                )
                  return (
                    <button
                      type="button"
                      aria-label="minimize window"
                      onClick={handleMinimize}
                    >
                      <MinusCircleIcon className="h-6 w-6" />
                    </button>
                  );
                if (
                  appInstance.viewState === "minimized" ||
                  appInstance.viewState === "normal"
                )
                  return (
                    <button
                      type="button"
                      aria-label="maximize window"
                      onClick={handleMaximize}
                    >
                      {/* TODO: this probably should change */}
                      <WindowIcon className="h-6 w-6" />
                    </button>
                  );
                return null;
              })()}

              <button
                type="button"
                aria-label="close window"
                onClick={handleOnClose}
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Card>

        <div id={`panel-content-${appInstance.instanceId}`}>
          <pre>{JSON.stringify(appInstance, null, 2)}</pre>
        </div>
      </Card>
    </motion.div>
  );
}
