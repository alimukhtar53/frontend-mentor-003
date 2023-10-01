import useStore, { Addons } from "app/store/userStore";

interface CheckboxChangeHandler {
  (isChecked: boolean): void;
}
interface Props {
  addon: Addons;
  isChecked?: boolean;
  onCheckboxChange: CheckboxChangeHandler;
}

const Checkbox = ({ addon, isChecked, onCheckboxChange }: Props) => {
  const { userInitialInfo } = useStore();
  const { step3 } = userInitialInfo;
  const { addons, selectedAddons } = step3;
  const { title } = addon;

  const handleCheckBoxChange = () => {
    onCheckboxChange(!isChecked);

    // Update the user store based on the isChecked state
    if (!isChecked) {
      // If the checkbox is checked, add the value to the selectedAddons
      const addon = addons.find((addon) => addon.title === title);
      if (addon) {
        selectedAddons.push(addon);
      }
    } else {
      // If the checkbox is unchecked, remove the value from selectedAddons
      step3.selectedAddons = selectedAddons.filter(
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
        id={addon.title}
        className="hidden-xs-up"
      />
    </>
  );
};

export default Checkbox;
