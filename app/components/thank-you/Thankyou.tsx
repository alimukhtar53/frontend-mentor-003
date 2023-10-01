import React from "react";
import thankyou from "app/assets/images/icon-thank-you.svg";
import styled from "styled-components";
import Image from "next/image";
import Heading from "../ui-elements/Heading";
import Description from "../ui-elements/Description";
import Spacer from "../ui-elements/Spacer";

function Thankyou() {
  return (
    <ThankyouWrapper>
      <Image src={thankyou} alt="icon-thankyou" />
      <Spacer value={32} />
      <Heading>Thank you!</Heading>
      <Spacer value={14} />

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
`;

export default Thankyou;
