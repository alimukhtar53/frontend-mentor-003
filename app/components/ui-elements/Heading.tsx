import { device } from "app/lib/device";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function Heading({ children }: Props) {
  return <HeadingWrapper>{children}</HeadingWrapper>;
}

const HeadingWrapper = styled.h1`
  color: var(--Denim, #022959);

  /* Heading */
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (${device.md}) {
    font-size: 24px;
  }
`;

export default Heading;
