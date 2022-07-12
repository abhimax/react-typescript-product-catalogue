import styled from "styled-components";

const Section = styled.div`
  margin-top: 3rem;
`;

const HeadingSection = styled.div``;

const SubHeadingSection = styled.div``;

const HeadingText = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;

  color: ${(props) => props.theme.color?.primary};
`;

const SubHeadingText = styled.h3`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color?.secondary};
`;

export {
  Section,
  HeadingSection,
  SubHeadingSection,
  HeadingText,
  SubHeadingText,
};
