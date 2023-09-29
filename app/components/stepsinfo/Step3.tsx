import useStore from "app/store/userStore";
import React from "react";
import Heading from "../ui-elements/Heading";
import Spacer from "../ui-elements/Spacer";
import Description from "../ui-elements/Description";
import Addons from "../add-ons/Addons";
import { getPlanValue } from "app/lib/getPlanPrice";
import usePlanValue from "app/hooks/usePlanValue";

function Step3() {
  return (
    <div>
      <Heading>Pick add-ons</Heading>
      <Spacer value={11}></Spacer>
      <Description>Add-ons help enhance your gaming experience.</Description>
      <Spacer value={35}></Spacer>
      <Addons></Addons>
    </div>
  );
}

export default Step3;
