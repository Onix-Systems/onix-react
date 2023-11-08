import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://<YOUR-DSN-HERE>",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
});

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
