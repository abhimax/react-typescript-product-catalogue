import { render } from "@testing-library/react";

import { Option } from "./index";

test("option", () => {
  render(
    <Option
      props={{
        label: "option 1",
        value: "option 1",
      }}
    />
  );
});
