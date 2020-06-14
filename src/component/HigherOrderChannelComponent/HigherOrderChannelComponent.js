import React from 'react';
import './HigherOrderChannelComponent.css';

const HigherOrderChannelComponent = (option, WrappedComponent) => {
  return () => {
    return(
      <div className="HigherOrderChannelComponent">
        <WrappedComponent option={option} />
      </div>
    )
  }
}

export default HigherOrderChannelComponent;