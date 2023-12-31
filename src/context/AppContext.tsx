import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { App, AppInstance } from "../types/app";
import { APPS } from "../constants/apps";
import { useLocalStorage } from "react-use";

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
   * The apps currently available within the system, this is a state variable to make
   * it easier to dynamically edit/update apps on the fly.
   */
  apps: App[];
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
        appInstances: state.appInstances.filter(
          ({ instanceId }) => instanceId !== action.appInstanceId
        ),
      };
    case "OPEN_APP":
      return {
        ...state,
        appInstances: [...state.appInstances, action.appInstance],
      };
    case "MINIMIZE_APP":
      return {
        ...state,
        appInstances: state.appInstances.map((appInstance) => {
          if (appInstance.instanceId === action.appInstanceId) {
            return {
              ...appInstance,
              viewState: "minimized",
            };
          }

          return appInstance;
        }),
      };
    case "MAXIMIZE_APP":
      return {
        ...state,
        appInstances: state.appInstances.map((appInstance) => {
          if (appInstance.instanceId === action.appInstanceId) {
            return {
              ...appInstance,
              viewState: "normal",
            };
          }

          return appInstance;
        }),
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
export function AppProvider(
  props: PropsWithChildren<{
    /**
     * List of apps that could be provided to override the defaults.
     */
    apps?: App[];
  }>
) {
  const { apps } = props;

  const [localStorageState, setState] = useLocalStorage("apps:state", {});

  const [state, dispatch] = useReducer(appReducer, {
    listOpened: false,
    apps: apps ?? APPS,
    appInstances: [],
    ...localStorageState,
  });

  useEffect(() => {
    console.log(">> state:", state);
    setState(state);
  }, [state, setState]);

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
      appInstance: AppInstance;
    }
  | {
      type: "CLOSE_APP";
      appInstanceId: AppInstance["id"];
    }
  | {
      type: "MINIMIZE_APP";
      appInstanceId: AppInstance["id"];
    }
  | {
      type: "MAXIMIZE_APP";
      appInstanceId: AppInstance["id"];
    };
