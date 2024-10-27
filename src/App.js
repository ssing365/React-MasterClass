import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100vw;
height: 100vh;
&:active{
  background-color: cadetblue;
};
`;

const rotateAnimation = keyframes`
0%{
background-color:aliceblue;
}
50%{
border-radius:100px;
background-color:pink;
}
100%{
transform:rotate(360deg);
background-color:aliceblue;
}
`;

const Emoji = styled.div`
`
const Box = styled.div`
background-color:blue;
width:200px;
height:200px;
//Animation
animation:${rotateAnimation} 2s linear infinite;
//Pseudo Selector
display:flex;
align-items:center;
justify-content:center;
span{
  font-size:40px;
  &:hover{
    font-size:60px;
  }
  &:active{
    background-color: cadetblue;
  }
}

${Emoji}{
  &:hover{
    font-size: 90px;
  }
}
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <span>😵‍💫</span>
        <Emoji>😵</Emoji>
      </Box>
      <Emoji>😏</Emoji>
    </Wrapper>
  );
}

export default App;
