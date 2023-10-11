import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));
const App: React.FC = () => {

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
