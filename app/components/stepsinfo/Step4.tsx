import React from "react";
import Summary from "../summary/Summary";
import Heading from "../ui-elements/Heading";
import Spacer from "../ui-elements/Spacer";
import Description from "../ui-elements/Description";

function Step4() {
  return (
    <div>
      <Heading>Finishing up</Heading>
      <Spacer value={11}></Spacer>
      <Description>
        Double-check everything looks OK before confirming.
      </Description>
      <Spacer value={35}></Spacer>
      <Summary></Summary>
    </div>
  );
}

export default Step4;
