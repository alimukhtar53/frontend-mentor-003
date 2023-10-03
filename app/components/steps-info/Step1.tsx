import useStore from "app/store/userStore";
import React from "react";
import Description from "../ui-elements/Description";
import Heading from "../ui-elements/Heading";
import InputGroup from "../ui-elements/InputGroup";
import Spacer from "../ui-elements/Spacer";
import useSpacerValue from "app/hooks/useSpacerValue";

function Step1() {
  const { userInitialInfo, setUserInfo } = useStore();
  const { step1 } = userInitialInfo;
  const { name, emailAddress, phoneNumber } = step1;

  // TODO: Add form validations
  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setUserInfo("step1", { ...step1, [key]: e.target.value });
    };
  }

  return (
    <>
      <Heading>Personal info</Heading>
      <Spacer value={useSpacerValue("betweenTitle")}></Spacer>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>
      <Spacer value={useSpacerValue("betweenContent")}></Spacer>
      <InputGroup label="Name" htmlFor="name">
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={updateForm("name")}
        ></input>
      </InputGroup>
      <Spacer value={useSpacerValue("betweenInput")} />
      <InputGroup label="Email Address" htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={emailAddress}
          onChange={updateForm("emailAddress")}
        ></input>
      </InputGroup>
      <Spacer value={useSpacerValue("betweenInput")} />
      <InputGroup label="Phone Number" htmlFor="phone">
        <input
          type="tel"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={updateForm("phoneNumber")}
        ></input>
      </InputGroup>
    </>
  );
}

export default Step1;
