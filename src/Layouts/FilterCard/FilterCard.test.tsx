import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../store/store";

import { FilterCard } from "./index";

test("filter card", () => {
  render(
    <Provider store={store}>
      <FilterCard searchValue={""} setSearchValue={null} />
    </Provider>
  );
});
