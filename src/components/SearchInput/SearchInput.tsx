import { FC } from "react";
import {
    Section,
    IconSection,
    InputSection,
    Input,
    Icon,
  } from "./SearchInput.styled";
  import { ISearchInputProps } from "./SearchInput.d"
  
  const SearchInput: FC<ISearchInputProps> = ({searchValue, setSearchValue }) => {
    return (
      <Section>
        <IconSection>
          <Icon className="search-icon" src="icons/search.svg" />
        </IconSection>
        <InputSection>
          <Input
            placeholder="Type here..."
            value={searchValue}
            onChange={(e) => {
              return setSearchValue(e.target.value);
            }}
          />
        </InputSection>
      </Section>
    );
  };
  
  export default SearchInput;