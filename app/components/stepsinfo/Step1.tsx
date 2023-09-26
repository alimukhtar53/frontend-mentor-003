import React from "react";
import Heading from "../ui-elements/Heading";
import Description from "../ui-elements/Description";
import Spacer from "../ui-elements/Spacer";
import InputGroup from "../ui-elements/InputGroup";

function Step1() {
  return (
    <>
      <Heading>Personal info</Heading>
      <Spacer value={11}></Spacer>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>
      <Spacer value={35}></Spacer>
      <InputGroup label="Name">
        <input placeholder="e.g. Stephen King"></input>
      </InputGroup>
      <Spacer value={24} />
      <InputGroup label="Email Address">
        <input placeholder="e.g. Stephen King"></input>
      </InputGroup>
      <Spacer value={24} />
      <InputGroup label="Phone Number">
        <input placeholder="e.g. Stephen King"></input>
      </InputGroup>
    </>
  );
}

export default Step1;
