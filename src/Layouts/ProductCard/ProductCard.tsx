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

import { IProductCardProps } from "./ProductCard.d"

const ProductCard: FC<IProductCardProps> = ({ productName, tags, category }) => {
  return (
    <Section>
      <LeftSection>
        <NameSection>
          <NameText>{ productName }</NameText>
        </NameSection>

        <TagsSection>
          {
            tags.map((item, key)=>{
              return <Tag key={`${key}-${item}`} label={item}/>
            })
          }
        </TagsSection>
      </LeftSection>
      <RightSection>
        <CategorySection>
          <CategoryText>{ category }</CategoryText>
        </CategorySection>
      </RightSection>
    </Section>
  );
};

export default ProductCard;
