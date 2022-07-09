import { FC, useState } from "react";
import { Options } from "../Options/index";
import { Tag, Button } from "../../components/index";

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
  const [activeOption, setActiveOption] = useState<string>(props?.option1!);

  const buttonClickHandel = () => {
    return window.open(
      `${props?.manufacturerUrl}`,
      "_blank",
      "noopener noreferrer"
    );
  };
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

      <ButtonSection>
        <Button label={"Go to manufacturer"} onClick={buttonClickHandel} />
      </ButtonSection>

      <DetailsSection>
        <DetailsText>{props?.description}</DetailsText>

        <OptionsSection>
        <Options
            props={[
              {
                label: props?.option1,
                value: props?.option1,
              },
              {
                label: props?.option2,
                value: props?.option2,
              },
            ]}
            active={activeOption}
            setActive={setActiveOption}
          />
        </OptionsSection>
      </DetailsSection>
    </Section>
  );
};

export default ProductDetails;
