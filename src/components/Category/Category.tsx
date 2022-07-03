import { FC } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Section, CheckBoxSection } from "./Category.styled";

const Category: FC = () => {
  return (
    <Section>
      <CheckBoxSection>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Software Development"
          value={"label1"}
        />
      </CheckBoxSection>
    </Section>
  );
};

export default Category;