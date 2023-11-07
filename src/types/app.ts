import { ComponentType, LazyExoticComponent } from "react";

export interface App {
  /**
   * The id of the app, unique to all app-ids.
   */
  readonly id: string;
  /**
   * The name of the app, used for display purposes.
   */
  readonly name: string;
  /**
   * The icon of the app, used for display purposes.
   */
  readonly icon: string;
  /**
   * Factory function to create a new React component for the app.
   *
   * TODO: verify the factory function
   * React factory function that can return components and lazy loaded components
   */
  readonly factory: () => // | JSX.Element
  ComponentType<unknown> | LazyExoticComponent<ComponentType<unknown>>;
}

export interface AppInstance extends App {
  /**
   * The generated instance id, each window has its own instance.
   */
  readonly instanceId: string;
  /**
   * If the app is minimized in the app-bar.
   */
  viewState: "minimized" | "normal" | "maximized";
}
