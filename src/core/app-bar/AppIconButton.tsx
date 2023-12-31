import { HomeIcon } from "@heroicons/react/24/solid";
import { useCallback, useContext } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";

/**
 * TODO: rename for clarity, maybe to "run?"
 * @returns app-icon button shown in the lower right.
 */
export function AppIconButton() {
  const { listOpened } = useContext(AppContext) ?? {};
  const dispatch = useContext(AppContextDispatch);

  const handleOnClick = useCallback(() => {
    if (dispatch)
      listOpened
        ? dispatch({
            type: "CLOSE_APP_LIST",
          })
        : dispatch({
            type: "OPEN_APP_LIST",
          });
  }, [listOpened, dispatch]);

  return (
    <button type="button" onClick={handleOnClick} aria-label="Start Button">
      <HomeIcon className="h-6 w-6 text-green-300" />
    </button>
  );
}
