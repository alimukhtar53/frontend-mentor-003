import thankyou from "public/images/icon-thank-you.svg";
import Image from "next/image";
import styled from "styled-components";
import Description from "../ui-elements/Description";
import Heading from "../ui-elements/Heading";
import Spacer from "../ui-elements/Spacer";
import { device } from "app/lib/device";

function Thankyou() {
  return (
    <ThankyouWrapper>
      <Image src={thankyou} height={80} alt="icon-thankyou" />
      <Spacer value={32} />
      <Heading>Thank you!</Heading>
      <Spacer value={9} />

      <Description>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Description>
    </ThankyouWrapper>
  );
}

const ThankyouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;

  @media (${device.md}) {
    min-height: 400px;
    font-size: 14px;
  }
`;

export default Thankyou;
