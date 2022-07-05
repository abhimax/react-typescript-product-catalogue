import { FC } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Section, CheckBoxSection } from "./Category.styled";
import { ICategoryProps } from "./category.d";

const Category: FC <ICategoryProps>= ({label, value, defaultChecked}) => {
  return (
    <Section>
      <CheckBoxSection>
        <FormControlLabel
          control={<Checkbox defaultChecked={defaultChecked} />}
          label={label}
          value={value}
        />
      </CheckBoxSection>
    </Section>
  );
};

export default Category;