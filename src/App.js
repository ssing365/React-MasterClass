import styled from "styled-components";

const Father = styled.div`
display:flex;
`;
const Box = styled.div`
background-color:${props => props.bgColor}; //1. prop을 이용해 중복되는 코드 없애고 간결하게
width:100px;
height:100px;
`;
const Circle = styled(Box)` //2.styled함수를 이용해 기존 컴포넌트 쉽게 확장시키기
border-radius:50px;
`
const Text = styled.h1`
color:white`

function App() {
  return (
    <Father>
      <Box bgColor='tomato'>
        <Text>Hello</Text>
      </Box>
      <Box bgColor='teal' />
      <Circle bgColor='blue'/>
    </Father>
  );
}

export default App;
