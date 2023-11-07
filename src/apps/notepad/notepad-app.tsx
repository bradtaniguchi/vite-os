import { SyntheticEvent, useCallback } from "react";
import { useAppService } from "../../hooks/use-app-services";
import { NOTEPAD_APP_DEF } from "./notepad-app-def";

export function NotepadApp() {
  const { localStorageService } = useAppService(NOTEPAD_APP_DEF.id);

  // prevent complex objects from being used
  const value =
    typeof localStorage.value === "object" ? "" : localStorage.value;

  const handleOnChange = useCallback(
    (e: SyntheticEvent) => {
      const target = e.target as HTMLDivElement;
      // TODO: do checks against previous
      console.log(target);
      localStorageService.set(target.innerText);
    },
    [localStorageService]
  );

  return (
    <div>
      {/* TODO: create core-app for menu components? */}
      <h1>Notepad app</h1>
      {/* TODO: add styling/formatting */}
      {/* TODO: prevent from saving incorrect */}
      <div contentEditable={true} onBlur={handleOnChange}>
        <>{value}</>
      </div>
    </div>
  );
}
