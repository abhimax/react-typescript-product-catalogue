import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  border-radius: 5px;

  background-color: ${(props) => props.theme.background.secondary};

  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  padding: 0 1.2rem 0.5rem 1.2rem;

  border: 3px solid transparent;
  border-bottom-color: #f8f8f8;
`;

const HeadingText = styled.h1`
  font-size: 1.2rem;

  font-weight: bold;
  color: ${(props) => props.theme.color.darkGray};
`;

const NameSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 2rem;
`;

const NameText = styled.h1`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.primary};
`;

const TagsSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 0.8rem;

  display: flex;
  flex-direction: row;
`;

const ButtonSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 0.8rem;
`;

const DetailsSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 0.8rem;
`;

const DetailsText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const OptionsSection = styled.div`
  margin-top: 1.5rem;
`;

export {
  Section,
  HeadingSection,
  HeadingText,
  NameSection,
  NameText,
  TagsSection,
  ButtonSection,
  DetailsSection,
  DetailsText,
  OptionsSection,
};
