import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.background.secondary};
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  border: 3px solid transparent;
  border-bottom-color: #f8f8f8;
  padding: 0 1.2rem 0.5rem 1.2rem;
`;

const HeadingText = styled.h1`
  font-size: 1.2rem;

  font-weight: bold;
  color: ${(props) => props.theme.color.darkGray};
`;

const CategoriesSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 1.3rem;
`;

const SearchSection = styled.div`
  margin-top: 1rem;
  padding: 0 2.2rem 0 1.2rem;
`;

export {
  Section,
  HeadingSection,
  HeadingText,
  CategoriesSection,
  SearchSection,
};
