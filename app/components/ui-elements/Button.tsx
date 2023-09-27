import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonVariant = "fill" | "ghost";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children?: React.ReactNode;
}

function Button({ variant, children = "Button", ...restProps }: Props) {
  let Component: React.ComponentType<any>;
  if (variant === "fill") Component = FillButton;
  else if (variant === "ghost") Component = GhostButton;
  else Component = ButtonBase;
  return <Component {...restProps}>{children}</Component>;
}

const ButtonBase = styled.button`
  border-radius: 8px;
  padding: 14px 24px;

  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const FillButton = styled(ButtonBase)`
  background: var(--Denim, #022959);
  color: var(--White, #fff);
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

export default Button;
