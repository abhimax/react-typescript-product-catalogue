import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Categories } from "./index";

test("categories", () => {
  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
});
