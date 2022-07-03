import { FC } from "react";
import { Section } from "./Categories.styled";
import { FormGroup } from "@mui/material";
import { Category } from "../../components";
const Categories: FC = () => {
  return (
    <Section>
      <FormGroup>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </FormGroup>
    </Section>
  );
};
export default Categories;
