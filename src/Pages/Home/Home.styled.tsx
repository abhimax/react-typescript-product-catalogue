import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background?.primary};
  display: flex;
  justify-content: center;
  position: relative;
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 0px) and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 90%;
  }
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
  @media screen and (min-width: 0px) and (max-width: 800px) {
    max-width: 100%;
    margin: 0 1rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25%;
  max-width: 25%;
  flex: 0;

  @media screen and (min-width: 0px) and (max-width: 800px) {
    min-width: 0%;
    max-width: 0%;
  }
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
  width: 100%;
  margin-left: 1rem;
  top: 16.7rem;
  left: 0;

  position: sticky;
  position: -webkit-sticky;

  @media screen and (min-width: 0px) and (max-width: 800px) {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    margin-left: 0rem;
  }
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
