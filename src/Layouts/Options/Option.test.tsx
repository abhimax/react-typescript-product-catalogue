import { render } from "@testing-library/react";

import { Options } from "./index";

test("options", () => {
  render(
    <Options
      props={[
        {
          label: "option 1",
          value: "option 1",
        },
        {
          label: "option 2",
          value: "option 2",
        },
      ]}
      active={"option 1"}
      setActive={null}
    />
  );
});
