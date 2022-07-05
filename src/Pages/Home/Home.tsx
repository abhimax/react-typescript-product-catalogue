import { useMemo, useState } from "react";

import product_data from "../../data/products.json";
import {
  Tabs,
  FilterCard,
  ProductCards,
  ProductDetails,
} from "../../Layouts/index";

import { Header } from "./components/Header/index";

import {
  Container,
  Section,
  TabsSection,
  FilterCardSection,
  ProductCardsSection,
  LeftSection,
  RightSection,
  ProductDetailsCardSection,
} from "./Home.styled";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<Array<string>>([]);

  const [productsData, setProductsData] = useState(product_data);

  // filter product data
  const p_data = useMemo(() => {
    return searchValue?.trim()?.length >= 1
      ? categoryValue?.length >= 1
        ? productsData
            .filter((item) => {
              return categoryValue.includes(item.category);
            })
            .filter((item) => {
              return item.productName
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase());
            })
        : productsData.filter((item) => {
            return item.productName
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase());
          })
      : categoryValue?.length >= 1
      ? productsData.filter((item) => {
          return categoryValue.includes(item.category);
        })
      : productsData;
  }, [searchValue, categoryValue, productsData]);

  return (
    <Container>
      <Section>
        <LeftSection>
          <Header />

          <TabsSection>
            <Tabs />
          </TabsSection>

          <FilterCardSection>
            <FilterCard
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </FilterCardSection>

          <ProductCardsSection>
            <ProductCards cardsData={p_data} />
          </ProductCardsSection>
        </LeftSection>

        <RightSection>
          <ProductDetailsCardSection>
            <ProductDetails />
          </ProductDetailsCardSection>
        </RightSection>
      </Section>
    </Container>
  );
};

export default HomePage;
