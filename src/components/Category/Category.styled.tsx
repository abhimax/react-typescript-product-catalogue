import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;

  & .MuiTypography-root {
    font-size: 0.9rem;
    font-weight: 600;

    color: ${(props) => props.theme.color.secondary};
  }
`;

const CheckBoxSection = styled.div``;

export { Section, CheckBoxSection };
