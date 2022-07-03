import { FC } from "react";

import { Tag } from "../../components/index";

import {
  Section,
  LeftSection,
  RightSection,
  NameSection,
  NameText,
  TagsSection,
  CategorySection,
  CategoryText,
} from "./ProductCard.styled";

const ProductCard: FC = () => {
  return (
    <Section>
      <LeftSection>
        <NameSection>
          <NameText>Lorem ipsum dolor, sit amet consectetur</NameText>
        </NameSection>

        <TagsSection>
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </TagsSection>
      </LeftSection>
      <RightSection>
        <CategorySection>
          <CategoryText>Daily Business</CategoryText>
        </CategorySection>
      </RightSection>
    </Section>
  );
};

export default ProductCard;
