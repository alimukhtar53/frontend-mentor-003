import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";

interface Props {
  label: string;
  children: React.ReactNode;
}

function InputGroup({ label, children }: Props) {
  return (
    <InputGroupWrapper>
      <Group>
        <label>{label}</label>
        {children}
      </Group>
    </InputGroupWrapper>
  );
}

const InputGroupWrapper = styled.div`
  display: flex;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Denim, #022959);
  width: 100%;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  label {
    margin-bottom: 8px;
  }

  input {
    border-radius: 8px;
    border: 1px solid var(--Border-Color, #d6d9e6);
    background: var(--White, #fff);
    padding: 12px 0 12px 16px;

    &:focus {
      outline: none;
      border-color: var(--purple);
    }

    &::placeholder {
      color: var(--Grey, #9699aa);
      font-family: Ubuntu;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 156.25% */
    }
  }
`;

export default InputGroup;
