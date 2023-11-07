import { lazy } from "react";
import { App } from "../../types/app";

export const EXPLORER_APP_DEF: App = {
  id: "explorer",
  name: "Explorer",
  icon: "📂",
  factory: () =>
    lazy(() =>
      import("./explorer-app").then(({ ExplorerApp }) => ({
        default: ExplorerApp,
      }))
    ),
};
