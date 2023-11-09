import React from 'react';
import { Provider, ErrorBoundary } from '@rollbar/react';

const rollbarConfig = {
  accessToken: 'YOUR_ROLLBAR_ACCESS_TOKEN',
  environment: 'production',
};

export default function App() {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  );
};
