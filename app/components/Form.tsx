"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import sidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

function Form() {
  return (
    <FormContainer>
      <Sidebar>
        <Image src={sidebarDesktop} alt={"sidebar-desktop"} />
        <ListWrapper>
          <ListItem>
            <Count>1</Count>
            <StepsInfo>
              <Step>Step 1</Step>
              <StepTitle>Your Info</StepTitle>
            </StepsInfo>
          </ListItem>
        </ListWrapper>
      </Sidebar>
    </FormContainer>
  );
}

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

const Sidebar = styled.div`
  position: relative;
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

const Count = styled.div`
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
`;

const StepsInfo = styled.div`
  display: flex;
  width: 86px;
  height: 33px;
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
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Form;
