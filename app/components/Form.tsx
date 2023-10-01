"use client";
import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import Sidebar from "./Sidebar";
import Step1 from "@/components/stepsinfo/Step1";
import Step2 from "@/components/stepsinfo/Step2";
import Step3 from "@/components/stepsinfo/Step3";
import Step4 from "@/components/stepsinfo/Step4";
import Button from "./ui-elements/Button";
import useStore from "app/store/userStore";

function Form() {
  const { currentStep, goToNextStep, goToPreviousStep } = useStore();

  const handleNextStepClick = () => {
    if (currentStep < STEPS.length - 1) {
      goToNextStep(1);
    }
  };
  const handleBackStepClick = () => {
    if (currentStep > 0) {
      goToPreviousStep(1);
    }
  };
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <FormContainer>
        <Sidebar currentStep={currentStep} />
        <StepsContentContainer>
          {STEPS[currentStep]}
          <ButtonWrapper>
            {currentStep === 3 ? (
              <Button variant={"success"} onClick={handleNextStepClick}>
                Confirm
              </Button>
            ) : (
              <>
                <Button variant={"fill"} onClick={handleNextStepClick}>
                  Next Step
                </Button>
                {currentStep > 0 && (
                  <Button variant={"ghost"} onClick={handleBackStepClick}>
                    Go Back
                  </Button>
                )}
              </>
            )}
          </ButtonWrapper>
        </StepsContentContainer>
      </FormContainer>
    </StyleSheetManager>
  );
}

const STEPS = [
  <Step1 key={0} />,
  <Step2 key={1} />,
  <Step3 key={3} />,
  <Step4 key={4} />,
  <Step1 key={5} />,
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
  margin: 40px 84px 16px 100px;

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
