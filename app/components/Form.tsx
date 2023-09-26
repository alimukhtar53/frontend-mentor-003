"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Step1 from "./stepsinfo/Step1";
import Step2 from "./stepsinfo/Step2";
import Step3 from "./stepsinfo/Step3";
import Step4 from "./stepsinfo/Step4";

function Form() {
  const [isActive, setIsActive] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);

  const onClickHandler = (index: number) => {
    setCurrentStep(index);
  };
  return (
    <FormContainer>
      <Sidebar currentStep={currentStep} onClickHandler={onClickHandler} />
      {STEPS[currentStep]}
    </FormContainer>
  );
}

const STEPS = [
  <Step1 key={0} />,
  <Step2 key={1} />,
  <Step3 key={3} />,
  <Step4 key={4} />,
];

const FormContainer = styled.div`
  width: 940px;
  height: 600px;
  display: flex;
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 15px;
  background: var(--White, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
`;

export default Form;
