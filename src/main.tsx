import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Challenge from './Challenge.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Challenge />
  </StrictMode>
);
