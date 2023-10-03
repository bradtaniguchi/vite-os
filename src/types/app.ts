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
