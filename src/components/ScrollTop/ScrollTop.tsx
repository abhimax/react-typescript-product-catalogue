import { FC } from "react";
import ScrollToTop from "react-scroll-up";

import { Icon, ButtonSection } from "./ScrollTop.styled";

const ScrollTop: FC = () => {
  return (
    <ScrollToTop showUnder={200}>
      <ButtonSection>
        <Icon src="icons/arrow.svg" />
      </ButtonSection>
    </ScrollToTop>
  );
};

export default ScrollTop;
