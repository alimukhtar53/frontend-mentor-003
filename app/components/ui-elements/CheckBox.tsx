import React, { useState } from "react";
import useStore from "app/store/userStore";
import styled, { keyframes } from "styled-components";

interface Props {
  addonTitle: string;
  isChecked?: boolean;
}

const Checkbox = ({ addonTitle }: Props) => {
  const { userInitialInfo } = useStore();
  const { step3 } = userInitialInfo;

  // Use useState to manage the selected state for each checkbox individually
  const [isChecked, setIsChecked] = useState(
    step3.selectedAddons.includes(addonTitle)
  );

  const handleCheckBoxChange = () => {
    // Toggle the isChecked state
    setIsChecked(!isChecked);

    // Update the user store based on the isChecked state
    if (!isChecked) {
      // If the checkbox is checked, add the value to the selectedAddons
      step3.selectedAddons.push(addonTitle);
    } else {
      // If the checkbox is unchecked, remove the value from selectedAddons
      step3.selectedAddons = step3.selectedAddons.filter(
        (item) => item !== addonTitle
      );
    }
  };

  return (
    <>
      <input
        type="checkbox"
        value={addonTitle}
        onChange={handleCheckBoxChange}
        checked={isChecked}
        id="cbx"
        className="hidden-xs-up"
      />
    </>
  );
};

export default Checkbox;
