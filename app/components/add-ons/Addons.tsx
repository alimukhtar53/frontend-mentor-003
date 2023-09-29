import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../ui-elements/CheckBox";
import { useId } from "react";
import usePlanValue from "app/hooks/usePlanValue";
import useStore from "app/store/userStore";
import { getPlanValue } from "app/lib/getPlanPrice";

function Addons() {
  const [isChecked, setIsChecked] = useState(false);
  const { userInitialInfo, selectAddons } = useStore();
  const { step2, step3 } = userInitialInfo;
  const { isYearly } = step2;
  const { addons } = step3;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(userInitialInfo);
  return (
    <AddonsWrapper>
      {addons.map((addon, index) => (
        <div key={index}>
          <Addon isChecked={isChecked}>
            <AddonContent>
              <Checkbox
                addonTitle={addon.title}
                // isChecked={isChecked}
                // handleCheckboxChange={handleCheckboxChange}
              ></Checkbox>
              <AddonDetails>
                <AddonTitle>{addon.title}</AddonTitle>
                <AddonDescription>{ADDONINFO[addon.title]}</AddonDescription>
              </AddonDetails>
              <PriceTag>+${getPlanValue(addon.value, isYearly)}/mo</PriceTag>
            </AddonContent>
          </Addon>
        </div>
      ))}
    </AddonsWrapper>
  );
}

const ADDONINFO = {
  "Online Services": "Access to multiplayer games",
  "Larger Storage": "Extra 1TB of cloud save",
  "Customizable Profile": "Custom theme on your profile",
};

const AddonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const Addon = styled.div<{ isChecked: boolean }>`
  height: 81px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--Border-Color, #d6d9e6);
  background: var(--White, #fff);

  ${(props) =>
    props.isChecked
      ? `border-radius: 8px;
    border: 1px solid var(--Purple, #483EFF);
    background: var(--Very-Light-Grey, #F8F9FF);`
      : ""}
`;
const AddonContent = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding-right: 24px;
  padding-left: 24px;
  height: 100%;
  align-items: center;
  gap: 24px;
`;
const AddonDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  align-items: start;
`;
const AddonTitle = styled.div`
  color: var(--denim, #022959);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AddonDescription = styled.div`
  color: var(--grey, #9699aa);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const PriceTag = styled.div`
  color: var(--purple, #483eff);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export default Addons;
