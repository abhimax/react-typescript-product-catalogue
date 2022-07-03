import {
    Section,
    IconSection,
    InputSection,
    Input,
    Icon,
  } from "./SearchInput.styled";
  
  const SearchInput = () => {
    return (
      <Section>
        <IconSection>
          <Icon className="search-icon" src="icons/search.svg" />
        </IconSection>
        <InputSection>
          <Input placeholder="Type here..." />
        </InputSection>
      </Section>
    );
  };
  
  export default SearchInput;