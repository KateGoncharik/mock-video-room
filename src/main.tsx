import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './GlobalStyles.ts';
import { AppRouter } from './Router.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
