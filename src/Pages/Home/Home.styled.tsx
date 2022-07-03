import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  overflow: hidden;
  overflow-y: scroll;

  background-color: ${(props) => props.theme.background.primary};

  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16.7rem;

  flex: 0;
`;

const TabsSection = styled.div`
  margin-top: 2.5rem;
`;

const FilterCardSection = styled.div`
  margin-top: 1.5rem;
`;

const ProductCardsSection = styled.div`
  margin-top: 1rem;
`;

const ProductDetailsCardSection = styled.div`
  margin-left: 1rem;
`;

export {
  Container,
  Section,
  TabsSection,
  FilterCardSection,
  ProductCardsSection,
  LeftSection,
  RightSection,
  ProductDetailsCardSection,
};
