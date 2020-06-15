import React from 'react';
import './HigherOrderChannelComponent.css';

let HigherOrderChannelComponent = (option={title: "Channel"}, WrappedComponent) => {
  return () => {
    return(
      <div className="HigherOrderChannelComponent">
        <WrappedComponent option={option} />
      </div>
    )
  }
}

export default HigherOrderChannelComponent;