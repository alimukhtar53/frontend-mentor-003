import { device } from "app/lib/device";
import { useMediaQuery } from "react-responsive";

interface Props {
  between: "betweenTitle" | "betweenContent" | "betweenInput";
}

function useSpacerValue(between: Props["between"]) {
  const isTabletOrMobile = useMediaQuery({
    query: device.md,
  });
  const spacerValues = {
    betweenTitle: { mobile: 9, desktop: 11 },
    betweenContent: { mobile: 22, desktop: 35 },
    betweenInput: { mobile: 16, desktop: 24 },
  };

  const selectedSpacer = spacerValues[between];

  const spacerValue = isTabletOrMobile
    ? selectedSpacer.mobile
    : selectedSpacer.desktop;

  return spacerValue;
}

export default useSpacerValue;
