import { render } from "@testing-library/react";

import { Button } from "./index";

test("button", () => {
  render(
    <Button
      label="Button"
      onClick={() => {
        console.log("button click");
      }}
    />
  );
});
