import styled from "styled-components";

const Section = styled.div`
  margin: 0.3rem 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.background.secondary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NameSection = styled.div``;

const NameText = styled.h1`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.primary};
`;

const TagsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CategorySection = styled.div`
  padding-top: 0.5rem;
`;

const CategoryText = styled.h1`
  font-size: 0.9rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.primary};
`;

export {
  Section,
  LeftSection,
  RightSection,
  NameSection,
  NameText,
  TagsSection,
  CategorySection,
  CategoryText,
};
