const MyComponent = () => {
  const throwError = () => {
    throw new Error('This is a simulated error');
  };

  return (
    <div>
      <button onClick={throwError}>Throw an Error</button>
    </div>
  );
}

const App = () => (
  <>
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  </>
);
