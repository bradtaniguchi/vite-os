import { ComponentType, LazyExoticComponent, lazy } from "react";
import { CALCULATOR_APP_DEF } from "../apps/calculator/calculator-app-def";
import { EXPLORER_APP_DEF } from "../apps/explorer/explorer-app-def";
import { HELLO_WORLD_APP } from "../apps/hello-world/hello-world-def";
import { NOTEPAD_APP_DEF } from "../apps/notepad/notepad-app-def";
import { WELCOME_APP_DEF } from "../apps/welcome/welcome-app-def";
import { App } from "../types/app";
import { HelloWorldApp } from "../apps/hello-world/hello-world";
import { WelcomeApp } from "../apps/welcome/welcome-app";

/**
 * List of all the apps on the entire system.
 */
export const APPS: Array<App> = [
  HELLO_WORLD_APP,
  WELCOME_APP_DEF,
  CALCULATOR_APP_DEF,
  EXPLORER_APP_DEF,
  NOTEPAD_APP_DEF,
];

export const APP_FACTORIES = new Map<
  App["id"],
  () => ComponentType<unknown> | LazyExoticComponent<ComponentType<unknown>>
>([
  [HELLO_WORLD_APP.id, () => HelloWorldApp],
  [WELCOME_APP_DEF.id, () => WelcomeApp],
  [
    CALCULATOR_APP_DEF.id,
    () =>
      lazy(() =>
        import("../apps/calculator/calculator-app").then(
          ({ CalculatorApp }) => ({
            default: CalculatorApp,
          })
        )
      ),
  ],
  [
    EXPLORER_APP_DEF.id,
    () =>
      lazy(() =>
        import("../apps/explorer/explorer-app").then(({ ExplorerApp }) => ({
          default: ExplorerApp,
        }))
      ),
  ],
  [
    NOTEPAD_APP_DEF.id,
    () =>
      lazy(() =>
        import("../apps/notepad/notepad-app").then(({ NotepadApp }) => ({
          default: NotepadApp,
        }))
      ),
  ],
]);

const DUPLICATE_IDS = new Set<string>();
const MISSING_FACTORIES = new Set<string>();

for (const app of APPS) {
  if (DUPLICATE_IDS.has(app.id)) throw new Error(`Duplicate app id: ${app.id}`);
  DUPLICATE_IDS.add(app.id);

  if (!APP_FACTORIES.has(app.id)) MISSING_FACTORIES.add(app.id);
}
