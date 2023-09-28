import useStore, { Plan } from "app/store/userStore";
import Image from "next/image";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import arcadeIcon from "app/assets/images/icon-arcade.svg";
import advancedIcon from "app/assets/images/icon-advanced.svg";
import proIcon from "app/assets/images/icon-pro.svg";
import Spacer from "../ui-elements/Spacer";
import { getPlanValue } from "app/lib/getPlanPrice";

function Plans() {
  const { userInitialInfo, changePlanType, changePlanDuration } = useStore();
  const { step2 } = userInitialInfo;
  const { plans, planType, isYearly } = step2;

  // changing plan duration type e.g monthly/yearly
  const handleToggle = () => {
    changePlanDuration(!isYearly);
  };

  return (
    <>
      <PlansWrapper>
        {plans.map((plan, index) => (
          <div key={index} onClick={() => changePlanType(plan.title)}>
            <PlanCard planType={planType} planTitle={plan.title}>
              <Content>
                <Image
                  src={ICONS[plan.title as Plan["title"]]}
                  alt="arcade-icon"
                ></Image>
                <div>
                  <Title>{plan.title}</Title>
                  <PriceTag>${getPlanValue(plan.value, isYearly)}/mo</PriceTag>
                  {isYearly && (
                    <DiscountedPlaceholder>2 months free</DiscountedPlaceholder>
                  )}
                </div>
              </Content>
            </PlanCard>
          </div>
        ))}
      </PlansWrapper>
      <Spacer value={32} />
      <PlanToggleWrapper>
        <span style={!isYearly ? { color: "#022959" } : {}}>Monthly</span>
        <Switch>
          <Input
            type="checkbox"
            value={String(isYearly)}
            onChange={handleToggle}
          />
          <RoundSlider isYearly={isYearly} />
        </Switch>

        <span style={isYearly ? { color: "#022959" } : {}}>Yearly</span>
      </PlanToggleWrapper>
    </>
  );
}

const ICONS: Record<Plan["title"], string> = {
  arcade: arcadeIcon,
  advanced: advancedIcon,
  pro: proIcon,
};

const PlansWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlanCard = styled.div<{ planType: string; planTitle: string }>`
  width: 138px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 20px 16px;
  outline: 1px solid var(--Border-Color, #d6d9e6);
  background: var(--white, #fff);
  transition: all 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.planType === props.planTitle &&
    css`
      border-radius: 8px;
      outline: 1px solid var(--Purple, #483eff);
      background: var(--Very-Light-Grey, #f8f9ff);
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.span`
  color: var(--denim, #022959);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
  text-transform: capitalize;
`;

const PriceTag = styled.div`
  color: var(--grey, #9699aa);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DiscountedPlaceholder = styled.span`
  color: var(--Denim, #022959);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
`;

const PlanToggleWrapper = styled.div`
  border-radius: 8px;
  background: var(--very-light-grey, #f8f9ff);
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  color: var(--grey, #9699aa);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// Styled Switch Container
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
`;

// Styled Input (Hidden Checkbox)
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// Styled Slider
const Slider = styled.span<{ isYearly: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--denim, #022959);
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  ${Input}:checked + & {
    background-color: var(--denim, #022959);
  }

  ${Input}:focus + & {
    background-color: var(--denim, #022959);
  }
`;

// Styled Round Slider
const RoundSlider = styled(Slider)`
  border-radius: 34px;

  &:before {
    ${(props) => (props.isYearly ? "right: 4px;" : "left: 4px;")}
    border-radius: 50%;
  }
`;

export default Plans;
