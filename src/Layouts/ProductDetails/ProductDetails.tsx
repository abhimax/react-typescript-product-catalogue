import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { Options } from "../Options/index";
import { Tag, Button } from "../../components/index";

import {
  HeaderSection,
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
} from "./ProductDetails.styled";

import { setProduct } from "../../store/reducer/productDetails.reducer";

import { IProductDetailsProps } from "./ProductDetails.d";

const ProductDetails: FC<IProductDetailsProps> = ({ props }) => {
  const [activeOption, setActiveOption] = useState<string>(props?.option1!);

  const dispatch = useDispatch();

  const buttonClickHandel = () => {
    return window.open(
      `${props?.manufacturerUrl}`,
      "_blank",
      "noopener noreferrer"
    );
  };

  const closeButtonHandel = () => {
    return dispatch(
      setProduct({
        product: null,
      })
    );
  };

  return (
    <Section>
      <HeaderSection>
        <HeadingSection>
          <HeadingText>Product Details</HeadingText>
        </HeadingSection>

        <CloseButtonSection
          className="close-button"
          onClick={closeButtonHandel}
        >
          <CloseButtonIcon src="icons/close.svg" />
        </CloseButtonSection>
      </HeaderSection>

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
