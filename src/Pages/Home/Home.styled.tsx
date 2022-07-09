import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

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
  max-width: 70%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  flex: 1;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25%;
  max-width: 25%;
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
  width: 100%;
  top: 16.7rem;
  left: 0;

  position: sticky;
  position: -webkit-sticky;
`;

const BlankSection = styled.div`
  width: 100%;
  height: 300px;
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
  BlankSection,
};
