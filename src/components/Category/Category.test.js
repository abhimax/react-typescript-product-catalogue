import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../store/store";

import { Category } from "./index";

test("category", () => {
  render(
    <Provider store={store}>
      <Category label="category" checked={true} value={"category value"} />
    </Provider>
  );
});
