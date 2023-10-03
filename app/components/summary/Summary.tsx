import usePlanTotal from "app/hooks/usePlanTotal";
import usePlanValue from "app/hooks/usePlanValue";
import { device } from "app/lib/device";
import { getPlanValue } from "app/lib/getPlanPrice";
import useStore from "app/store/userStore";
import styled from "styled-components";

function Summary() {
  const { userInitialInfo, goToPreviousStep } = useStore();
  const { step2, step3 } = userInitialInfo;
  const { selectedAddons } = step3;
  const { planType, isYearly } = step2;

  const planPrice = usePlanValue();
  const planTotal = usePlanTotal();

  const planDuration = isYearly ? "year" : "month";
  const planDurationPlaceholder = isYearly ? "yr" : "mo";

  const getAddonPrice = (price: number) => {
    return getPlanValue(price, isYearly);
  };

  return (
    <>
      <SummaryContainer>
        <SelectedPlan>
          <PlanWrapper>
            <PlanTitle>
              {planType} ({planDuration + "ly"})
            </PlanTitle>
            <PlanChange>
              <span onClick={() => goToPreviousStep(2)}>Change</span>
            </PlanChange>
          </PlanWrapper>
          <PlanPricing>
            ${planPrice}/{planDurationPlaceholder}
          </PlanPricing>
        </SelectedPlan>
        {selectedAddons.length > 0 && (
          <>
            <hr />
            <AddonsWrapper>
              {selectedAddons.map((addon, index) => (
                <AddonDetails key={index}>
                  <AddonTitle>{addon.title}</AddonTitle>
                  <AddonPrice>
                    +${getAddonPrice(addon.value)}/{planDurationPlaceholder}
                  </AddonPrice>
                </AddonDetails>
              ))}
            </AddonsWrapper>
          </>
        )}
      </SummaryContainer>
      <TotalWrapper>
        <Total>Total (per {planDuration})</Total>
        <TotalPrice>
          +${planTotal()}/{planDurationPlaceholder}
        </TotalPrice>
      </TotalWrapper>
    </>
  );
}

const SummaryContainer = styled.div`
  width: 450px;
  height: max-content;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--Very-Light-Grey, #f8f9ff);

  padding: 16px 24px 24px 24px;

  @media (${device.md}) {
    max-width: 295px;
    padding: 16px;
  }

  hr {
    margin-top: 24px;
    margin-bottom: 16px;
    opacity: 0.2043;
    background: var(--Grey, #9699aa);
  }
`;

const SelectedPlan = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (${device.md}) {
    gap: 3px;
  }
`;
const PlanTitle = styled.div`
  text-transform: capitalize;
  color: var(--denim, #022959);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${device.md}) {
    font-size: 14px;
  }
`;

const PlanChange = styled.span`
  color: var(--grey, #9699aa);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  text-decoration-line: underline;
  cursor: pointer;
  width: max-content;
  transition: color 0.2s ease;

  &:hover {
    color: var(--purple, #483eff);
  }
`;

const PlanPricing = styled(PlanTitle)`
  text-transform: lowercase;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;

const AddonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const AddonDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
const AddonTitle = styled.div`
  color: var(--grey, #9699aa);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
const AddonPrice = styled(AddonTitle)`
  color: var(--denim, #022959);
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const Total = styled(AddonTitle)``;

const TotalPrice = styled.div`
  color: var(--purple, #483eff);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`;
export default Summary;
