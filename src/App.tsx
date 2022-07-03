import './App.css';
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";

import "./App.css";

import { theme } from "./theme/theme";

import { HomePage } from "./Pages/Home";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
