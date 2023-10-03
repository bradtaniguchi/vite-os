import { Card } from "flowbite-react";
import { App } from "../../types/app";
import { MouseEvent, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * Component shown on the AppList. Each individual app is a card
 * shown within the list.
 */
export function AppListItem(props: { app: App; onClick: (id: App) => void }) {
  const { app, onClick } = props;

  const { icon, name } = app;

  const handleOnClick = useCallback(
    async (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      onClick(app);
    },
    [onClick, app]
  );

  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
      <Card className="h-full cursor-pointer" onClick={handleOnClick}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-4xl">{icon}</div>
          <div>{name}</div>
        </div>
      </Card>
    </motion.div>
  );
}
