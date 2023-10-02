"use client";

import { device } from "app/lib/device";
import { listOfSteps } from "app/lib/listOfsteps";
import useStore from "app/store/userStore";
import { useMediaQuery } from "react-responsive";
import styled, { StyleSheetManager } from "styled-components";
import Sidebar from "./Sidebar";
import Button from "./ui-elements/Button";
import CommonFormStructure, { STEPS } from "./CommonFormStructure";

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
      {isTabletOrMobile ? (
        <FormWrapper>
          <CommonFormStructure
            isTabletOrMobile={isTabletOrMobile}
            currentStep={currentStep}
            lastStep={lastStep}
            handleNextStepClick={handleNextStepClick}
            handleBackStepClick={handleBackStepClick}
          />
        </FormWrapper>
      ) : (
        <CommonFormStructure
          isTabletOrMobile={isTabletOrMobile}
          currentStep={currentStep}
          lastStep={lastStep}
          handleNextStepClick={handleNextStepClick}
          handleBackStepClick={handleBackStepClick}
        />
      )}

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

const FormWrapper = styled.div`
  position: relative;
  height: 172px;
  width: 343px;
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
  z-index: 3;
`;

export default Form;
