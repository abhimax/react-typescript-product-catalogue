import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;

  & .active-product-card {
    border: 2px solid ${(props) => props.theme.background?.blue} !important;
  }
`;

export { Section };
