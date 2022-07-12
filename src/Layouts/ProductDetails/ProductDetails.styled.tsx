import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  border-radius: 5px;
  padding-bottom: 2rem;

  background-color: ${(props) => props.theme.background?.secondary};

  display: flex;
  flex-direction: column;

  & .close-button {
    display: none;
  }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    height: 100%;
    width: 100%;
    padding-top: 2rem;

    & .close-button {
      display: flex;
    }
  }
`;

const HeaderSection = styled.div`
  padding: 0 2rem 0.5rem 1.2rem;

  border: 3px solid transparent;
  border-bottom-color: #f8f8f8;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeadingSection = styled.div``;

const HeadingText = styled.h1`
  font-size: 1.2rem;

  font-weight: bold;
  color: ${(props) => props.theme.color?.darkGray};
`;

const CloseButtonSection = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 999px;

  background-color: ${(props) => props.theme.background?.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButtonIcon = styled.img``;

const NameSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 2rem;
`;

const NameText = styled.h1`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color?.primary};
`;

const TagsSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 0.8rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ButtonSection = styled.div`
  padding: 0 1.2rem;
  margin-top: 1.8rem;
`;

const DetailsSection = styled.div`
  padding: 0 1rem;
  margin-top: 0.8rem;
`;

const DetailsText = styled.p`
  font-size: 0.85rem;
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
  CloseButtonSection,
  CloseButtonIcon,
  HeaderSection,
};
