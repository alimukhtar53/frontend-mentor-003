import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
  onClick: any;
}

function Button({ children = "Button", onClick }: Props) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  border-radius: 8px;
  background: var(--Denim, #022959);
  padding: 14px 24px;

  color: var(--White, #fff);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #164a8a;
  }
`;

export default Button;
