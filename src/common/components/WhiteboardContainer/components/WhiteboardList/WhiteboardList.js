import React from 'react';

import WhiteboardPostIt from './components/WhiteboardPostIt';
import whiteboardListProps from './WhiteboardList.props';
import './WhiteboardList.css';

const WhiteboardList = (props) => {
  const handleRemove = (id) => {
    props.onItemRemove(id);
  };

  const handleUpdate = (id, title, infoList, authorName, color) => {
    props.onItemUpdate(id, title, infoList, authorName, color);
  };

  return (
    <ul className="WhiteboardList">
      {
        props.postIts.reverse().map(whiteboardPostIt => (
          <WhiteboardPostIt
            animate
            key={whiteboardPostIt.id}
            id={whiteboardPostIt.id}
            title={whiteboardPostIt.title}
            infoList={whiteboardPostIt.infoList}
            authorName={whiteboardPostIt.authorName}
            color={whiteboardPostIt.color}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))
      }
    </ul>
  );
};

WhiteboardList.propTypes = whiteboardListProps;

export default WhiteboardList;
