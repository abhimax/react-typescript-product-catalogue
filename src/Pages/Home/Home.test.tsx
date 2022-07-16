import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { HomePage } from "./index";

test("home page", () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
});
