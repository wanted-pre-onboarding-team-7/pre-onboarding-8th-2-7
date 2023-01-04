import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyleComponent from './styles/GlobalStylesComp';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyleComponent />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
