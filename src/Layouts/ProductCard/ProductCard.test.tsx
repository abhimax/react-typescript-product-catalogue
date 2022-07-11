import { render } from "@testing-library/react";

import { ProductCard } from "./index";

test("product card", () => {
  render(
    <ProductCard
      onCardClick={() => {
        console.log("product card clicked");
      }}
      props={{
        productName: "Foxit software PhantomPDF Standard",
        tags: ["PDF, Change, Create, Maintenance, Business, FoxIT"],
        category: "Daily Business",
        manufacturerUrl: "https://www.foxitsoftware.com/de/pdf-editor",
        description: [
          "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
          "Standard - Simple interface and limited functionality.",
        ],
        option1: "1 Year Maintenance",
        option2: "Without Maintenance",
      }}
      isActive={false}
      index={0}
    />
  );
});
