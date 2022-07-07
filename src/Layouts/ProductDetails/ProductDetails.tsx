import { FC } from "react";
import { Options } from "../Options/index";
import { Tag } from "../../components/index";

import {
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
} from "./ProductDetails.styled";

import { IProductDetailsProps } from "./productDetails.d";

const ProductDetails: FC<IProductDetailsProps> = ({ props }) => {
  return (
    <Section>
      <HeadingSection>
        <HeadingText>Product Details</HeadingText>
      </HeadingSection>

      <NameSection>
        <NameText>{props?.productName}</NameText>
      </NameSection>

      <TagsSection>
        {props?.tags?.map((item, i) => {
          return <Tag key={i} label={item} />;
        })}
      </TagsSection>

      <ButtonSection></ButtonSection>

      <DetailsSection>
        <DetailsText>{props?.description}</DetailsText>

        <OptionsSection>
          <Options />
        </OptionsSection>
      </DetailsSection>
    </Section>
  );
};

export default ProductDetails;
