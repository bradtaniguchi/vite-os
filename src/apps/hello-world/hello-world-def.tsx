import { App } from "../../types/app";
import { HelloWorldApp } from "./hello-world";

export const HELLO_WORLD_APP: App = {
  id: "hello-world",
  name: "Hello World",
  icon: "🌎",
  factory: () => HelloWorldApp,
};
