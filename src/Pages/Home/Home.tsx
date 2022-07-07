import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
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

import { ICategoryRootState } from "../../store/reducer/types/category.d";
import { IProductDetailsRootState } from "../../store/reducer/types/productDetails.d";
import { IProduct } from "../../types/types.d";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [productsData, setProductsData] =
  useState<Array<IProduct>>(product_data);

  const categories = useSelector(
    (state: ICategoryRootState) => state.category.category
  );

  const postDetails = useSelector(
    (state: IProductDetailsRootState) => state.productDetails.product
  );

  // filter product data
  const p_data = useMemo(() => {
    return searchValue?.trim()?.length >= 1
      ? categories?.length >= 1
        ? productsData
            .filter((item) => {
              return categories.includes(item.category);
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
      : categories?.length >= 1
      ? productsData.filter((item) => {
          return categories.includes(item.category);
        })
      : productsData;
  }, [searchValue, productsData, categories]);

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
          {postDetails && (
            <ProductDetailsCardSection>
              <ProductDetails props={postDetails} />
            </ProductDetailsCardSection>
          )}
        </RightSection>
      </Section>
    </Container>
  );
};

export default HomePage;
