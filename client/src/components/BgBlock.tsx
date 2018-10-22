import * as React from 'react';
import '../css/bg-block.css';

let BgBlock = props => {
  let backgroundColor = {
    backgroundColor: props.color
  };
  return (
    <div className="bg-block" style={backgroundColor}>{props.children}</div>
  );
};

export {BgBlock};