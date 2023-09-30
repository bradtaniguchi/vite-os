import "./App.css";
import { AppProvider } from "./context/AppContext";
import { AppContainer } from "./core/app-container/AppContainer";

function App() {
  return (
    <>
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </>
  );
}

export default App;
