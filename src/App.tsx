import "./App.css";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";

import { theme } from "./theme/theme";

import { HomePage } from "./Pages/Home";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
