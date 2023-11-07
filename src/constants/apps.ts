import { CALCULATOR_APP_DEF } from "../apps/calculator/calculator-app-def";
import { EXPLORER_APP_DEF } from "../apps/explorer/explorer-app-def";
import { HELLO_WORLD_APP } from "../apps/hello-world/hello-world-def";
import { NOTEPAD_APP_DEF } from "../apps/notepad/notepad-app-def";
import { WELCOME_APP_DEF } from "../apps/welcome/welcome-app-def";
import { App } from "../types/app";

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

const DUPLICATE_IDS = new Set<string>();

for (const app of APPS) {
  if (DUPLICATE_IDS.has(app.id)) throw new Error(`Duplicate app id: ${app.id}`);
  DUPLICATE_IDS.add(app.id);
}
