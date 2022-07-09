import styled from "styled-components";

const Section = styled.div`
  & .MuiTypography-root {
    font-weight: 500;
    font-size: 0.9rem;

    color: ${(props) => props.theme.color.secondary};
  }
`;

const TopSection = styled.div``;

const BottomSection = styled.div``;

const DetailsSection = styled.div``;

const DetailsText = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
`;

export { Section, TopSection, BottomSection, DetailsSection, DetailsText };
