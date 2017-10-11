import React from 'react';

import WhiteboardInput from './components/WhiteboardInput';
import WhiteboardList from './components/WhiteboardList';
import whiteboardWrapperProps from './WhiteboardWrapper.props';
import './WhiteboardContainer.css';

const WhiteboardWrapper = props => (
  <div className="WhiteboardContainer-wrapper">
    <WhiteboardInput onAdd={props.handleAdd} />
    <WhiteboardList
      postIts={props.postIts}
      onItemRemove={props.handleRemove}
      onItemUpdate={props.handleUpdate}
    />
  </div>
);

WhiteboardWrapper.propTypes = whiteboardWrapperProps;
export default WhiteboardWrapper;
