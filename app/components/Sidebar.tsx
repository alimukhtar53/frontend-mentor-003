import React from "react";
import styled from "styled-components";
import Image from "next/image";
import sidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import { listOfSteps } from "app/lib/listOfsteps";

interface Props {
  currentStep: number;
}

function Sidebar({ currentStep }: Props) {
  return (
    <SidebarWrapper>
      <Image src={sidebarDesktop} alt={"sidebar-desktop"} priority={true} />
      <ListWrapper>
        {listOfSteps.map((item, index) => (
          <ListItem key={index}>
            <Count currentStep={currentStep} currentIndex={index}>
              {index + 1}
            </Count>
            <StepsInfo>
              <Step>Step {index + 1}</Step>
              <StepTitle>{item}</StepTitle>
            </StepsInfo>
          </ListItem>
        ))}
      </ListWrapper>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  position: relative;
  pointer-events: none;
`;

const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  left: 32px;
  gap: 2rem;
`;
const ListItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const Count = styled.div<{ currentStep: number; currentIndex: number }>`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.currentStep === props.currentIndex &&
    `
    color: var(--denim, #022959);
    background-color: var(--sky-blue, #bee2fd);
    border: unset;

  `}
`;

const StepsInfo = styled.span`
  display: flex;
  width: max-content;
  max-height: 33px;
  flex-direction: column;
  justify-content: space-between;
`;

const Step = styled.span`
  color: var(--Light-Blue, #abbcff);
  text-transform: uppercase;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StepTitle = styled.span`
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Sidebar;
