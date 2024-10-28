import React from "react";
import styled from "styled-components";

interface ContainerProps {
  //Container에게 prop들의 타입을 지정해주기 위한 interface
  bgColor: string;
  borderColor?: string;
  text?: string;
}
interface CircleProps {
  //Circle에게 prop들의 타입을 지정해주기 위한 interface
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor='black', text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor}>
      {text}
    </Container>
  );
}

export default Circle;
