import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import "./App.css";

import { store } from "./store/store";

import { theme } from "./theme/theme";

import { HomePage } from "./pages/index";

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
