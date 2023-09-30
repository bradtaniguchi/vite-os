import React, { PropsWithChildren, createContext, useReducer } from "react";
import { App, AppInstance } from "../types/app";

/**
 * The application context. This state should handle
 * anything related to apps/windows and general high level
 * displaying of apps.
 */
export interface AppContextState {
  /**
   * If the appList is opened
   */
  listOpened: boolean;
  /**
   * The apps currently displayed/opened on the desktop
   */
  apps: App["id"][];
  /**
   * The list of app instances.
   */
  appInstances: AppInstance[];

  // TODO: add app locations, will be used to save the location of an app.
}

export const AppContext = createContext<AppContextState | null>(null);

export const AppContextDispatch =
  createContext<React.Dispatch<AppContextAction> | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function appReducer(
  state: AppContextState,
  action: AppContextAction
): AppContextState {
  switch (action.type) {
    case "OPEN_APP_LIST":
      return {
        ...state,
        listOpened: true,
      };
    case "CLOSE_APP_LIST":
      return {
        ...state,
        listOpened: false,
      };
    case "CLOSE_APP":
      return {
        ...state,
        apps: state.apps.filter((id) => id !== action.appInstanceId),
      };
    case "OPEN_APP":
      return {
        ...state,
        apps: [...state.apps, action.appInstanceId],
      };
    default:
      return state;
  }
}

/**
 * Component that provides the AppProvider context to manage global app state.
 *
 * @param props AppProvider props
 */
export function AppProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, {
    listOpened: false,
    apps: [],
    appInstances: [],
  });

  return (
    <AppContext.Provider value={state}>
      <AppContextDispatch.Provider value={dispatch}>
        {props.children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
}

/**
 * The type representing every single type of action that can be dispatched to
 * handle the app context.
 */
export type AppContextAction =
  | {
      type: "OPEN_APP_LIST";
    }
  | {
      type: "CLOSE_APP_LIST";
    }
  | {
      type: "OPEN_APP";
      appInstanceId: AppInstance["id"];
    }
  | {
      type: "CLOSE_APP";
      appInstanceId: AppInstance["id"];
    };
