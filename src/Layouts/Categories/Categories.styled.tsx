import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & .MuiFormGroup-root {
    display: flex;
    flex-direction: row !important;
  }
`;

export { Section };
