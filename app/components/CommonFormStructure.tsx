import Step1 from "@/components/stepsInfo/Step1";
import Step2 from "@/components/stepsInfo/Step2";
import Step3 from "@/components/stepsInfo/Step3";
import Step4 from "@/components/stepsInfo/Step4";
import Thankyou from "@/components/thank-you/Thankyou";
import { device } from "app/lib/device";
import React from "react";
import styled from "styled-components";
import Button from "./ui-elements/Button";
import Sidebar from "./Sidebar";

function CommonFormStructure({
  isTabletOrMobile,
  currentStep,
  lastStep,
  handleNextStepClick,
  handleBackStepClick,
}: any) {
  return (
    <>
      <FormContainer>
        {!isTabletOrMobile && <Sidebar currentStep={currentStep} />}
        <StepsContentContainer>
          {STEPS[currentStep]}
          {!isTabletOrMobile && (
            <ButtonWrapper>
              {currentStep === lastStep ? (
                <Button variant={"success"} onClick={handleNextStepClick}>
                  Confirm
                </Button>
              ) : (
                currentStep < lastStep && (
                  <Button variant={"fill"} onClick={handleNextStepClick}>
                    Next Step
                  </Button>
                )
              )}
              {currentStep > 0 && currentStep < 4 && (
                <Button variant={"ghost"} onClick={handleBackStepClick}>
                  Go Back
                </Button>
              )}
            </ButtonWrapper>
          )}
        </StepsContentContainer>
      </FormContainer>
    </>
  );
}

export const STEPS = [
  <Step1 key={0} />,
  <Step2 key={1} />,
  <Step3 key={3} />,
  <Step4 key={4} />,
  <Thankyou key={5} />,
];

const FormContainer = styled.div`
  width: 940px;
  height: 600px;
  display: grid;
  margin: auto;
  grid-template-columns: 274px 1fr;
  padding: 1rem;
  border-radius: 15px;
  font-family: Ubuntu;
  font-feature-settings: "clig" off, "liga" off;
  background: var(--White, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (${device.md}) {
    height: fit-content;
    max-width: 343px;
    padding: 32px 24px;
    grid-template-columns: unset;
    position: absolute;
    top: -269px;
    /* margin-top: -65px; */
  }
`;

const StepsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 84px 16px 100px;

  @media (${device.md}) {
    margin: unset;
  }
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

  @media (${device.md}) {
    position: absolute;
    bottom: 0;
  }
`;

export default CommonFormStructure;
