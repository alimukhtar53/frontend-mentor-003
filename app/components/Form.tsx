"use client";
import Step1 from "@/components/stepsInfo/Step1";
import Step2 from "@/components/stepsInfo/Step2";
import Step3 from "@/components/stepsInfo/Step3";
import Step4 from "@/components/stepsInfo/Step4";
import Thankyou from "@/components/thank-you/Thankyou";
import { device } from "app/lib/device";
import { listOfSteps } from "app/lib/listOfsteps";
import useStore from "app/store/userStore";
import { useMediaQuery } from "react-responsive";
import styled, { StyleSheetManager } from "styled-components";
import Sidebar from "./Sidebar";
import Button from "./ui-elements/Button";

function Form() {
  const { currentStep, goToNextStep, goToPreviousStep, resetForm } = useStore();
  const totalSteps = listOfSteps.length; // 4
  const lastStep = totalSteps - 1; // 3
  const isTabletOrMobile = useMediaQuery({
    query: device.md,
  });

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleNextStepClick = () => {
    if (currentStep < STEPS.length - 1) {
      // Cancel the timeout if it's set
      clearTimeout(timeoutId);
      goToNextStep(1);
    }

    if (currentStep === lastStep) {
      // Set a timeout to reset the form after 10 seconds
      timeoutId = setTimeout(resetForm, 10000);
    }
  };

  const handleBackStepClick = () => {
    if (currentStep > 0) {
      goToPreviousStep(1);
    }
  };
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      {isTabletOrMobile && <Sidebar currentStep={currentStep} />}
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
      {isTabletOrMobile && (
        <MobileButtonWrapper>
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
        </MobileButtonWrapper>
      )}
    </StyleSheetManager>
  );
}

const STEPS = [
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
    max-width: 343px;
    padding: 24px 32px;
    grid-template-columns: unset;
    position: relative;
    top: 0;
    margin-top: -65px;
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

const MobileButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  min-height: 72px;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-between;
  background: var(--White, #fff);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export default Form;
