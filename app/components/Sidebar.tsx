"use client";
import { listOfSteps } from "app/lib/listOfsteps";
import Image from "next/image";
import styled from "styled-components";
import sidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import { device } from "app/lib/device";
import { useMediaQuery } from "react-responsive";
const sidebarMobile = "/images/bg-sidebar-mobile.svg";

interface Props {
  currentStep: number;
}

function Sidebar({ currentStep }: Props) {
  const isTabletOrMobile = useMediaQuery({
    query: device.md,
  });

  const sidebarDesktop = "/images/bg-sidebar-desktop.svg";
  return (
    <>
      <SidebarWrapper imagedesktop={sidebarDesktop} imagemobile={sidebarMobile}>
        {/* <SideBarImage ></SideBarImage> */}
        {/* <Image src={sidebarDesktop} alt={"sidebar-desktop"} priority={true} /> */}
        <ListWrapper>
          {listOfSteps.map((item, index) => (
            <ListItem key={index}>
              <Count currentstep={currentStep} currentindex={index}>
                {index + 1}
              </Count>
              {!isTabletOrMobile && (
                <StepsInfo>
                  <Step>Step {index + 1}</Step>
                  <StepTitle>{item}</StepTitle>
                </StepsInfo>
              )}
            </ListItem>
          ))}
        </ListWrapper>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div<{
  imagedesktop: string;
  imagemobile: string;
}>`
  background-image: url(${(props) => props.imagedesktop});
  background-repeat: no-repeat;
  padding: 40px 32px 0 32px;
  /* width: 100%;
  height: 100%; */
  @media (${device.md}) {
    background-image: url(${(props) => props.imagemobile});
    width: 100%;
    min-height: 172px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 0;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  position: absolute;
  @media (${device.md}) {
    flex-direction: unset;
    gap: 1rem;
  }
`;
const ListItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const Count = styled.div<{ currentstep: number; currentindex: number }>`
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
    props.currentstep === props.currentindex &&
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
