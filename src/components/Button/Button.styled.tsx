import styled from "styled-components";

const Section = styled.div`
  height: 40px;
  padding: 0 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.button?.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const LabelText = styled.h1`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.color?.white};
`;

export { Section, Label, LabelText };
