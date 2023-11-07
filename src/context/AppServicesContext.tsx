import { App } from "../types/app";

/**
 * The AppServicesContext includes all the service instances
 * for every single app currently defined within APPs.
 *
 * Each instance shares the same instances of their services.
 * TODO: this isn't needed yet
 */
export interface AppServicesContextState {
  serviceInstances: Array<{
    /**
     * The id of the app
     */
    appId: App["id"];
    // TODO:
  }>;
}
