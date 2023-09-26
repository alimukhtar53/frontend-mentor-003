import React from "react";
import Heading from "../ui-elements/Heading";
import Description from "../ui-elements/Description";
import Spacer from "../ui-elements/Spacer";

function Step1() {
  return (
    <div>
      <Heading>Personal info</Heading>
      <Spacer value={11}></Spacer>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>
      <Spacer value={35}></Spacer>
    </div>
  );
}

export default Step1;
