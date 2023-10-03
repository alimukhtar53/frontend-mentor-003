import { device } from "app/lib/device";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function Description({ children }: Props) {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
}

const DescriptionWrapper = styled.h1`
  color: var(--Grey, #9699aa);

  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;

export default Description;
