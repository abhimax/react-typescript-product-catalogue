import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import product_data from "../../data/products.json";

import {
  Tabs,
  FilterCard,
  ProductCards,
  ProductDetails,
} from "../../layouts/index";

import { ScrollTop } from "../../components/ScrollTop/index";

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
  BlankSection,
} from "./Home.styled";

import { ICategoryRootState } from "../../store/reducer/types/category";
import { IProductDetailsRootState } from "../../store/reducer/types/productDetails";
import { IProduct } from "../../types/types";
import { ITabsRootState } from "../../store/reducer/types/tabs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [productsData, setProductsData] =
    useState<Array<IProduct>>(product_data);

  // store selector
  const categories = useSelector(
    (state: ICategoryRootState) => state.category.category
  );

  const postDetails = useSelector(
    (state: IProductDetailsRootState) => state.productDetails.product
  );

  const activeTab = useSelector(
    (state: ITabsRootState) => state.tabs.activeTab
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
    <Container className="h-container">
      <Section className="h-section">
        <LeftSection className="h-left-section">
          <Header />

          <TabsSection>
            <Tabs />
          </TabsSection>

          {/* tab panel */}
          <TabPanel value={activeTab} index={0}>
            <FilterCardSection>
              <FilterCard
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </FilterCardSection>

            <ProductCardsSection>
              <ProductCards cardsData={p_data} />
            </ProductCardsSection>
          </TabPanel>

          <BlankSection />
        </LeftSection>

        <RightSection className="h-right-section">
          {/* post details */}
          {postDetails && (
            <ProductDetailsCardSection>
              <ProductDetails props={postDetails} />
              <BlankSection />
            </ProductDetailsCardSection>
          )}
        </RightSection>
      </Section>

      <ScrollTop />
    </Container>
  );
};

export default HomePage;
