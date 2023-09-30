import { HomeIcon } from "@heroicons/react/24/solid";
import { useCallback, useContext } from "react";
import { AppContext, AppContextDispatch } from "../../context/AppContext";

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
    <button onClick={handleOnClick}>
      <HomeIcon className="h-6 w-6 text-green-300" />
    </button>
  );
}
