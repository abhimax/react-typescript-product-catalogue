import styled from "styled-components";

const Section = styled.div`
  height: auto;
  width: auto;
  padding: 0rem 0.5rem;
  border-radius: 8px;
  margin: 0.5rem 0.5rem 0 0;

  background-color: ${(props) => props.theme.background.lightBlue};
`;

const NameSection = styled.div``;

const NameText = styled.h1`
  font-size: 0.8rem;
  font-weight: 600;
  max-width: 100px;
  color: ${(props) => props.theme.color.blue};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { Section, NameSection, NameText };
