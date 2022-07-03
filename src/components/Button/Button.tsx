import { FC } from "react";

import { Section, Label, LabelText } from "./Button.styled";

const Button: FC = () => {
  return (
    <Section as="button">
      <Label>
        <LabelText>Go to manufacture</LabelText>
      </Label>
    </Section>
  );
};

export default Button;