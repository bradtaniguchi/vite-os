import { useAppService } from "../../hooks/use-app-services";
import { NOTEPAD_APP_DEF } from "./notepad-app-def";

export function NotepadApp() {
  const { localStorageService } = useAppService(NOTEPAD_APP_DEF.id);

  return (
    <div>
      {/* TODO: create core-app for menu components? */}
      <h1>Notepad app</h1>
      {/* TODO: add styling/formatting */}
      <div contentEditable={true}>
        <>{localStorageService.value ?? "Hello World"}</>
      </div>
    </div>
  );
}
