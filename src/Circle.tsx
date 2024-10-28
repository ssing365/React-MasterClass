import React from "react";
import styled from "styled-components";

interface ContainerProps {
  //Container에게 prop들의 타입을 지정해주기 위한 interface
  bgColor: string;
}
interface CircleProps {
  //Circle에게 prop들의 타입을 지정해주기 위한 interface
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
