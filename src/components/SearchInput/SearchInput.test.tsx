import { render } from "@testing-library/react";

import { SearchInput } from "./index";

test("search input", () => {
  render(<SearchInput searchValue={""} setSearchValue={null} />);
});
