import { FC, useState } from "react";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

import { Option } from "../../components/index";

import { Section } from "./Options.styled";

const Options: FC = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Section>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Option />
          <Option />
          <Option />
        </RadioGroup>
      </FormControl>
    </Section>
  );
};

export default Options;