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
    return (
      <Container>
        <Section>
          <LeftSection>
            <Header />
  
            <TabsSection>
              <Tabs />
            </TabsSection>
  
            <FilterCardSection>
              <FilterCard />
            </FilterCardSection>
  
            <ProductCardsSection>
              <ProductCards />
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
  