import { render } from "@testing-library/react";

import { Tag } from "./index";

test("tag", () => {
  render(<Tag label="tag 1" />);
});
