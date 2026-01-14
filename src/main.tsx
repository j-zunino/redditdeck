import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles.css';
import * as TanstackQuery from './integrations/tanstack-query/root-provider';
const rqContext = TanstackQuery.getContext();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TanstackQuery.Provider {...rqContext}>
            <App />
        </TanstackQuery.Provider>
    </StrictMode>,
);
