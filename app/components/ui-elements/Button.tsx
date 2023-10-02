import { device } from "app/lib/device";
import React, { ButtonHTMLAttributes } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

type ButtonVariant = "fill" | "ghost" | "success";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children?: React.ReactNode;
}

function Button({ variant, children = "Button", ...restProps }: Props) {
  const isTabletOrMobile = useMediaQuery({
    query: device.md,
  });
  let Component: React.ComponentType<any>;
  if (variant === "fill") Component = FillButton;
  else if (variant === "ghost") Component = GhostButton;
  else if (variant === "success") Component = SuccessButton;
  else Component = ButtonBase;
  return <Component {...restProps}>{children}</Component>;
}

const ButtonBase = styled.button`
  border-radius: 8px;
  padding: 15px 24.5px;

  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (${device.md}) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const FillButton = styled(ButtonBase)`
  background: var(--denim, #022959);
  color: var(--white, #fff);
  &:hover {
    background: #164a8a;
  }
`;
const GhostButton = styled(ButtonBase)`
  background: unset;
  color: var(--grey, #fff);
  &:hover {
    background: var(--grey);
    color: white;
  }
`;
const SuccessButton = styled(ButtonBase)`
  background: var(--purple, #483eff);
  color: white;
  &:hover {
    background: #928cff;
    color: white;
  }
`;

export default Button;
