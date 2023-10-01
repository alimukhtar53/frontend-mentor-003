import { getPlanValue } from "app/lib/getPlanPrice";
import useStore, { Addons } from "app/store/userStore";
import usePlanValue from "./usePlanValue";

function usePlanTotal() {
  const { userInitialInfo } = useStore();
  const { step2, step3 } = userInitialInfo;
  const { isYearly } = step2;
  const { selectedAddons } = step3;
  const planPrice = usePlanValue();

  const getTotal = () => {
    let total = 0;
    if (selectedAddons.length > 0) {
      selectedAddons.map(
        (addon: Addons) =>
          (total += isYearly
            ? getPlanValue(addon.value, isYearly)
            : addon.value)
      );
    }
    if (planPrice) {
      return planPrice + total;
    } else return total;
  };
  return getTotal;
}

export default usePlanTotal;
