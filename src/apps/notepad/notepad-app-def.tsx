import { App } from "../../types/app";
import { NotepadApp } from "./notepad-app";

export const NOTEPAD_APP_DEF: App = {
  id: "notepad",
  name: "Notepad",
  icon: "📝",
  factory: () => NotepadApp,
};
