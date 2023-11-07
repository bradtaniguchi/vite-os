import { lazy } from "react";
import { App } from "../../types/app";

export const CALCULATOR_APP_DEF: App = {
  id: "calculator",
  name: "Calculator",
  icon: "🧮",
  factory: () =>
    lazy(() =>
      import("./calculator-app").then(({ CalculatorApp }) => ({
        default: CalculatorApp,
      }))
    ),
};
