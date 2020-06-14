import React from 'react';
import './HigherOrderChannelComponent.css';

const HigherOrderChannelComponent = (option={title: "Channel"}, WrappedComponent, data) => {
  return () => {
    return(
      <div className="HigherOrderChannelComponent">
        <WrappedComponent option={option} channels={data} />
      </div>
    )
  }
}

export default HigherOrderChannelComponent;