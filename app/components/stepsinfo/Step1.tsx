import React from "react";
import Heading from "../ui-elements/Heading";
import Description from "../ui-elements/Description";
import Spacer from "../ui-elements/Spacer";
import InputGroup from "../ui-elements/InputGroup";
import useStore from "app/store/userStore";

function Step1() {
  const { userInitialInfo, setUserInfo } = useStore();
  const { step1 } = userInitialInfo;
  const { name, emailAddress, phoneNumber } = step1;

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setUserInfo("step1", { ...step1, [key]: e.target.value });
    };
  }

  console.log(userInitialInfo);

  return (
    <>
      <Heading>Personal info</Heading>
      <Spacer value={11}></Spacer>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>
      <Spacer value={35}></Spacer>
      <InputGroup label="Name">
        <input
          placeholder="e.g. Stephen King"
          value={name}
          onChange={updateForm("name")} // Pass the field name directly
        ></input>
      </InputGroup>
      <Spacer value={24} />
      <InputGroup label="Email Address">
        <input
          placeholder="e.g. stephenking@lorem.com"
          value={emailAddress}
          onChange={updateForm("emailAddress")} // Pass the field name directly
        ></input>
      </InputGroup>
      <Spacer value={24} />
      <InputGroup label="Phone Number">
        <input
          placeholder="e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={updateForm("phoneNumber")} // Pass the field name directly
        ></input>
      </InputGroup>
    </>
  );
}

export default Step1;
