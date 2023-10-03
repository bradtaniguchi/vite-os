import { HELLO_WORLD_APP } from "../apps/hello-world-def";
import { App } from "../types/app";

/**
 * List of all the apps on the entire system.
 */
export const APPS: Array<App> = [HELLO_WORLD_APP];

const DUPLICATE_IDS = new Set<string>();

for (const app of APPS) {
  if (DUPLICATE_IDS.has(app.id)) throw new Error(`Duplicate app id: ${app.id}`);
  DUPLICATE_IDS.add(app.id);
}
