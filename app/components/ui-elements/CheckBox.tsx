import React, { useState } from "react";
import useStore, { Addons } from "app/store/userStore";
import styled, { keyframes } from "styled-components";

interface Props {
  addon: Addons;
  isChecked?: boolean;
}

const Checkbox = ({ addon }: Props) => {
  const { userInitialInfo } = useStore();
  const { step3 } = userInitialInfo;
  const { addons } = step3;
  const { title } = addon;
  console.log("addon:", addon);

  // Use useState to manage the selected state for each checkbox individually
  const [isChecked, setIsChecked] = useState(
    step3.selectedAddons.some((addon) => addon.title === title)
  );

  const handleCheckBoxChange = () => {
    // Toggle the isChecked state
    setIsChecked(!isChecked);

    // Update the user store based on the isChecked state
    if (!isChecked) {
      // If the checkbox is checked, add the value to the selectedAddons
      const addon = addons.find((addon) => addon.title === title);
      if (addon) {
        step3.selectedAddons.push(addon);
      }
    } else {
      // If the checkbox is unchecked, remove the value from selectedAddons
      step3.selectedAddons = step3.selectedAddons.filter(
        (item) => item.title !== title
      );
    }
  };

  return (
    <>
      <input
        type="checkbox"
        value={addon.title}
        onChange={handleCheckBoxChange}
        checked={isChecked}
        id="cbx"
        className="hidden-xs-up"
      />
    </>
  );
};

export default Checkbox;
