import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count }) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps)(Counter);
