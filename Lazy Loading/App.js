// Implement Lazy Loading with React.lazy
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
 

// Handle Loading and Error States
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>} onError={<div>Error!</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
