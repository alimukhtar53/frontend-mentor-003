import useStore from "app/store/userStore";
import React from "react";
import Heading from "../ui-elements/Heading";
import Spacer from "../ui-elements/Spacer";
import Description from "../ui-elements/Description";
import Plans from "../plans/Plans";

function Step2() {
  return (
    <div>
      <Heading>Select your plan</Heading>
      <Spacer value={11}></Spacer>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <Spacer value={35}></Spacer>
      <Plans></Plans>
    </div>
  );
}

export default Step2;
