import styled from "styled-components";

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100vw;
height: 100vh;
background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
color: ${(props) => props.theme.titleColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
