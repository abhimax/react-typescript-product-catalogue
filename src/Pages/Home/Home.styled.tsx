import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  overflow: hidden;
  overflow-y: scroll;

  background-color: ${(props) => props.theme.background.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 55%;
`;

const TabsSection = styled.div`
  margin-top: 3rem;
`;

const FilterCardSection = styled.div`
  margin-top: 1.5rem;
`;

export { Container, Section, TabsSection, FilterCardSection };
