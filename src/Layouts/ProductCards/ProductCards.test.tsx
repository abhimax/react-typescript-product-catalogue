import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../store/store";

import { ProductCards } from "./index";

test("products cards", () => {
  render(
    <Provider store={store}>
      <ProductCards
        cardsData={[
          {
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
          },
          {
            productName: "Foxit Software PhantomPDF Business",
            tags: [],
            category: "Daily Business",
            manufacturerUrl: "https://www.foxitsoftware.com/de/pdf-editor",
            description: [
              "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
              "Business - Advances capabilities, complete lifecycle solution.",
            ],
            option1: "1 Year Maintenance",
            option2: "Without Maintenance",
          },
        ]}
      />
    </Provider>
  );
});
