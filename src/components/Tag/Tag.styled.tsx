import styled from "styled-components";

const Section = styled.div`
  height: auto;
  width: auto;
  padding: 0rem 0.5rem;
  border-radius: 8px;
  margin-right: 0.5rem;

  background-color: ${(props) => props.theme.background.lightBlue};
`;

const NameSection = styled.div``;

const NameText = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.blue};
`;

export { Section, NameSection, NameText };
