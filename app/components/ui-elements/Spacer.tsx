import styled from "styled-components";

interface Props {
  value: Number;
}

function Spacer({ value }: Props) {
  return <SpacerWrapper value={value}></SpacerWrapper>;
}

const SpacerWrapper = styled.div<{ value: Number }>`
  width: ${(props) => props.value + "px"};
  height: ${(props) => props.value + "px"};
`;

export default Spacer;
