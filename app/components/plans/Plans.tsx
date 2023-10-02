import advancedIcon from "/public/images/icon-advanced.svg";
import arcadeIcon from "/public/images/icon-arcade.svg";
import proIcon from "/public/images/icon-pro.svg";
import { getPlanValue } from "app/lib/getPlanPrice";
import useStore, { Plan } from "app/store/userStore";
import Image from "next/image";
import styled, { css } from "styled-components";
import Spacer from "../ui-elements/Spacer";
import { device } from "app/lib/device";
import { useMediaQuery } from "react-responsive";

function Plans() {
  const { userInitialInfo, changePlanType, changePlanDuration } = useStore();
  const { step2 } = userInitialInfo;
  const { plans, planType, isYearly } = step2;
  const planDurationPlaceholder = isYearly ? "yr" : "mo";
  const isTabletOrMobile = useMediaQuery({
    query: device.md,
  });

  // changing plan duration type e.g monthly/yearly
  const handleToggle = () => {
    changePlanDuration(!isYearly);
  };

  return (
    <>
      <PlansWrapper>
        {plans.map((plan, index) => (
          <div key={index} onClick={() => changePlanType(plan.title)}>
            <PlanCard plantype={planType} plantitle={plan.title}>
              <Content>
                <Image
                  src={ICONS[plan.title as Plan["title"]]}
                  alt="arcade-icon"
                ></Image>
                <div>
                  <Title>{plan.title}</Title>
                  <PriceTag>
                    ${getPlanValue(plan.value, isYearly)}/
                    {planDurationPlaceholder}
                  </PriceTag>
                  {isYearly && (
                    <DiscountedPlaceholder>2 months free</DiscountedPlaceholder>
                  )}
                </div>
              </Content>
            </PlanCard>
          </div>
        ))}
      </PlansWrapper>
      <Spacer value={isTabletOrMobile ? 24 : 32} />
      <PlanToggleWrapper>
        <span style={!isYearly ? { color: "#022959" } : {}}>Monthly</span>
        <Switch>
          <Input
            type="checkbox"
            value={String(isYearly)}
            onChange={handleToggle}
          />
          <RoundSlider isyearly={`${isYearly}`} />
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

  @media (${device.md}) {
    flex-direction: column;
    gap: 12px;
  }
`;

const PlanCard = styled.div<{ plantype: string; plantitle: string }>`
  width: 138px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 20px 16px;
  outline: 1px solid var(--Border-Color, #d6d9e6);
  background: var(--white, #fff);
  transition: background 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.plantype === props.plantitle &&
    css`
      border-radius: 8px;
      outline: 1px solid var(--Purple, #483eff);
      background: var(--Very-Light-Grey, #f8f9ff);
    `}

  @media (${device.md}) {
    max-height: 99px;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media (${device.md}) {
    flex-direction: unset;
    justify-content: unset;
    align-items: center;
    gap: 14px;
  }
`;

const Title = styled.p`
  color: var(--denim, #022959);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
  text-transform: capitalize;
`;

const PriceTag = styled.p`
  color: var(--grey, #9699aa);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DiscountedPlaceholder = styled.p`
  color: var(--denim, #022959);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  transition: all 0.3s ease;
  margin-top: 3px;
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
const Slider = styled.span<{ isyearly: string }>`
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
    ${(props) => (props.isyearly === "true" ? "right: 4px;" : "left: 4px;")}
    border-radius: 50%;
  }
`;

export default Plans;
