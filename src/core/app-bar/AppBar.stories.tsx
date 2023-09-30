import { Meta } from "@storybook/react";
import { AppBar } from "./AppBar";
import { AppProvider } from "../../context/AppContext";

export default {
  title: "AppBar",
  component: AppBar,
} as Meta;

export const Default = () => (
  <AppProvider>
    <AppBar />
  </AppProvider>
);
