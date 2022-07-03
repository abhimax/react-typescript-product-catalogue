import { FC } from "react";
import { Categories } from "../Categories/index";

import { SearchInput } from "../../components/index";

import {
  Section,
  HeadingSection,
  HeadingText,
  CategoriesSection,
  SearchSection,
} from "./FilterCard.styled";
const FilterCard: FC = () => {
    return (
        <Section>
          <HeadingSection>
            <HeadingText>I'm looking for...</HeadingText>
          </HeadingSection>
    
          <CategoriesSection>
            <Categories />
          </CategoriesSection>
    
          <SearchSection>
            <SearchInput />
          </SearchSection>
        </Section>
      );
}
export default FilterCard;