import useStore, { Plan } from "app/store/userStore";
import Image from "next/image";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import arcadeIcon from "app/assets/images/icon-arcade.svg";
import advancedIcon from "app/assets/images/icon-advanced.svg";
import proIcon from "app/assets/images/icon-pro.svg";

function Plans() {
  const { userInitialInfo, changePlanType } = useStore();
  const { step2 } = userInitialInfo;
  const { plans, planType } = step2;
  console.log(plans);
  return (
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
                <PriceTag>${plan.value}/mo</PriceTag>
              </div>
            </Content>
          </PlanCard>
        </div>
      ))}
    </PlansWrapper>
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

export default Plans;
