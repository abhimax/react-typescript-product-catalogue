import { FC } from "react";

import { Section, Label, LabelText } from "./Button.styled";

import { IButtonProps } from "./button.d";

const Button: FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <Section as="button" onClick={onClick}>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
    </Section>
  );
};

export default Button;
