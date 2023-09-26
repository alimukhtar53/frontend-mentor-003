"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Step1 from "./stepsInfo/Step1";
import Step2 from "./stepsInfo/Step2";
import Step3 from "./stepsInfo/Step3";
import Step4 from "./stepsInfo/Step4";
import Button from "./ui-elements/Button";

function Form() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStepClick = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <FormContainer>
      <Sidebar currentStep={currentStep} />
      <StepsContentContainer>
        {STEPS[currentStep]}
        <ButtonWrapper>
          <Button onClick={handleNextStepClick}>Next Step</Button>
          <Button onClick={handleNextStepClick}>Go Back</Button>
        </ButtonWrapper>
      </StepsContentContainer>
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
  display: grid;
  grid-template-columns: 274px 1fr;
  padding: 1rem;
  border-radius: 15px;
  font-family: Ubuntu;
  background: var(--White, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
`;

const StepsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 56px 90px 16px 100px;

  Heading {
    color: var(--Denim, #022959);

    /* Heading */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: flex-end;
  margin-top: auto;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export default Form;
