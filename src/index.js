import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { ThemeProvider } from 'styled-components';

const darkTheme = {
  backgroundColor: "#111",
  titleColor: "whitesmoke",
}

const lightTheme={
  backgroundColor: "whitesmoke",
  titleColor:"#111",
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);