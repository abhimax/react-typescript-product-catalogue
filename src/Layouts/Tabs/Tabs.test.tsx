import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../store/store";

import { Tabs } from "./index";

test("tabs", () => {
  render(
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
});
