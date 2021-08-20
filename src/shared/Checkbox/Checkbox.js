import React from "react";
import { Indicator, Wrapper } from "./Checkbox.styles";

function Checkbox({ value, title }) {
  return (
    <Wrapper>
      <Indicator value={value} />
      {title}
    </Wrapper>
  );
}

export default Checkbox;
