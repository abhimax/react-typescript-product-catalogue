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

const ProductDetails: FC = () => {
  return (
    <Section>
      <HeadingSection>
        <HeadingText>Product Details</HeadingText>
      </HeadingSection>

      <NameSection>
        <NameText>Lorem, ipsum dolor sit amet consectetur</NameText>
      </NameSection>

      <TagsSection>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </TagsSection>

      <ButtonSection></ButtonSection>

      <DetailsSection>
        <DetailsText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          architecto, provident quos, dolores totam deleniti quae unde nesciunt
          eum aspernatur suscipit ipsum obcaecati. Deleniti nobis dolor
          laudantium dolore possimus accusamus.
        </DetailsText>

        <OptionsSection>
          <Options />
        </OptionsSection>
      </DetailsSection>
    </Section>
  );
};

export default ProductDetails;