import { useCallback, useContext } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";
import { AppListItem } from "./AppListItem";
import { App } from "../../types/app";
import { getId } from "../../utils/get-id";

/**
 * The app-list is a list of all the apps in the system
 */
export function AppList() {
  const { apps } = useContext(AppContext) ?? {};
  const dispatch = useContext(AppContextDispatch);

  const handleOnAppListItemClick = useCallback(
    (app: App) => {
      if (dispatch) {
        dispatch({
          type: "OPEN_APP",
          appInstance: {
            ...app,
            // TODO: should be loaded from constants.
            viewState: "normal",
            instanceId: getId(),
          },
        });
        dispatch({ type: "CLOSE_APP_LIST" });
      }
    },
    [dispatch]
  );

  if (!apps)
    return (
      <div>
        <h1>No apps available</h1>
      </div>
    );

  return (
    <ul className="grid grid-cols-4 gap-4 grid-rows-4 h-full p-4 z-10">
      {apps.map((app) => (
        <li key={app.id}>
          <AppListItem app={app} onClick={handleOnAppListItemClick} />
        </li>
      ))}
    </ul>
  );
}
