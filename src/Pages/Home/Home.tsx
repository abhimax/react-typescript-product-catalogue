import { Tabs, FilterCard } from "../../Layouts/index";

import { Header } from "./components/Header/index";

import {
  Container,
  Section,
  TabsSection,
  FilterCardSection,
} from "./Home.styled";

const HomePage = () => {
  return (
    <Container>
      <Section>
        <Header />

        <TabsSection>
          <Tabs />
        </TabsSection>

        <FilterCardSection>
          <FilterCard />
        </FilterCardSection>
      </Section>
    </Container>
  );
};

export default HomePage;