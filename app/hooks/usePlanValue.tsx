import { getPlanValue } from "app/lib/getPlanPrice";
import useStore from "app/store/userStore";
import { useEffect, useState } from "react";

function usePlanValue() {
  const { userInitialInfo } = useStore();
  const { step2 } = userInitialInfo;
  const { isYearly } = step2;

  const userSelectedPlanType = userInitialInfo.step2.planType;
  const selectedPlan = userInitialInfo.step2.plans.find(
    (plan) => plan.title === userSelectedPlanType
  );

  let value = selectedPlan?.value;

  // Call useState unconditionally at the top level
  const [planValue, setPlanValue] = useState<null | number>(null);

  useEffect(() => {
    if (value) {
      let total = getPlanValue(value, isYearly);
      setPlanValue(isYearly ? total : value);
    } else {
      setPlanValue(null); // Handle the case when value is not available
    }
  }, [value, isYearly]);

  return planValue ? planValue : value;
}

export default usePlanValue;
