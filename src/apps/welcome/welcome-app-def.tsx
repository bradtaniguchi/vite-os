import { App } from "../../types/app";
import { WelcomeApp } from "./welcome-app";

export const WELCOME_APP_DEF: App = {
  id: "welcome",
  name: "Welcome",
  icon: "👋",
  factory: () => <WelcomeApp />,
};
