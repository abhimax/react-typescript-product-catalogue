import { FC } from "react";
import { Section, NameSection, NameText} from "./Tag.styled";
import { ITagProps } from "./Tag.d"
let Tag: FC<ITagProps> = ({ label }) => {
    return (
        <Section>
        <NameSection>
          <NameText>{ label }</NameText>
        </NameSection>
      </Section>
    );
}
export default Tag;