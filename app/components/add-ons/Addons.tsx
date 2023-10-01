import { getPlanValue } from "app/lib/getPlanPrice";
import useStore from "app/store/userStore";
import { useState } from "react";
import styled from "styled-components";
import Checkbox from "../ui-elements/CheckBox";

function Addons() {
  // const [isChecked, setIsChecked] = useState(false);
  const { userInitialInfo } = useStore();
  const { step2, step3 } = userInitialInfo;
  const { isYearly } = step2;
  const { addons } = step3;
  const planDurationPlaceholder = isYearly ? "yr" : "mo";

  const [checkboxStates, setCheckboxStates] = useState(
    addons.reduce((acc: any, addon) => {
      acc[addon.title] = false; // Initialize all checkboxes as unchecked
      return acc;
    }, {})
  );

  const handleCheckboxChange = (addonTitle: string, isChecked: boolean) => {
    setCheckboxStates((prevState: any) => ({
      ...prevState,
      [addonTitle]: isChecked,
    }));
  };

  return (
    <AddonsWrapper>
      {addons.map((addon, index) => (
        <div key={index}>
          <Addon ischecked={`${checkboxStates[addon.title]}`}>
            <AddonContent>
              <Checkbox
                addon={addon}
                isChecked={checkboxStates[addon.title]}
                onCheckboxChange={(isChecked: boolean) =>
                  handleCheckboxChange(addon.title, isChecked)
                }
              ></Checkbox>
              <AddonDetails>
                <AddonTitle>{addon.title}</AddonTitle>
                <AddonDescription>{ADDONINFO[addon.title]}</AddonDescription>
              </AddonDetails>
              <PriceTag>
                +${getPlanValue(addon.value, isYearly)}/
                {planDurationPlaceholder}
              </PriceTag>
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
const Addon = styled.div<{ ischecked: string }>`
  height: 81px;
  width: 100%;
  border-radius: 8px;
  outline: 1px solid;
  outline-color: var(--light-gray, #d6d9e6);
  background: var(--white, #fff);
  transition: all 0.3s;

  outline-color: ${(props) =>
    props.ischecked === "true"
      ? "var(--purple, #483EFF)"
      : "var(--light-gray, #d6d9e6)"};
  background: ${(props) =>
    props.ischecked === "false"
      ? "var(--very-light-grey, #F8F9FF)"
      : "var(--white, #fff)"};
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
