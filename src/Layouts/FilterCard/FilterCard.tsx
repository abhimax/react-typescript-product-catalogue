import { FC } from "react";
import { Categories } from "../Categories/index";

import { SearchInput } from "../../components/index";
import { IFilterCardProps } from "./FilterCard.d";

import {
  Section,
  HeadingSection,
  HeadingText,
  CategoriesSection,
  SearchSection,
} from "./FilterCard.styled";
const FilterCard: FC<IFilterCardProps> = ({ searchValue, setSearchValue}) => {
    return (
        <Section>
          <HeadingSection>
            <HeadingText>I'm looking for...</HeadingText>
          </HeadingSection>
    
          <CategoriesSection>
            <Categories />
          </CategoriesSection>
    
          <SearchSection>
            <SearchInput 
              searchValue= { searchValue }
              setSearchValue = { setSearchValue }
            />
          </SearchSection>
        </Section>
      );
}
export default FilterCard;