import { FC } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import {
  Section,
  TopSection,
  BottomSection,
  DetailsSection,
  DetailsText,
} from "./Option.styled";

import { IOptionProps } from "./Option.d";

const Option: FC<IOptionProps> = ({ props }) => {
  return (
    <Section>
      <TopSection>
        <FormControlLabel
          value={props?.value}
          control={<Radio />}
          label={props?.label}
        />
      </TopSection>
      <BottomSection>
        <DetailsSection>
          <DetailsText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            est delectus, doloremque soluta nostrum beatae officia veniam natus
            dignissimos assumenda mollitia totam eligendi sint a ut vitae
            impedit? Adipisci, non?
          </DetailsText>
        </DetailsSection>
      </BottomSection>
    </Section>
  );
};

export default Option;
