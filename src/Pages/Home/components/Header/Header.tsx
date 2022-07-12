import { FC } from "react";

import headerData from "../../../../data/home.json";

import {
  Section,
  HeadingSection,
  HeadingText,
  SubHeadingSection,
  SubHeadingText,
} from "./Header.styled";

const Header: FC = () => {
  return (
    <Section>
      <HeadingSection>
        <HeadingText>{headerData?.header?.heading}</HeadingText>
      </HeadingSection>
      <SubHeadingSection>
        <SubHeadingText>{headerData?.header?.subHeading}</SubHeadingText>
      </SubHeadingSection>
    </Section>
  );
};

export default Header;
