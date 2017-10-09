import React from 'react';

import whiteboardPostItProps from './WhiteboardPostIt.props';
import './WhiteboardPostIt.css';

const WhiteboardPostIt = (props) => {
  let title;
  let infoList;
  let authorName;
  let color;

  const handleRemove = () => {
    props.onRemove(props.id);
  };

  const handleUpdate = () => {
    props.onUpdate(props.id,
      title.value,
      infoList.value,
      authorName.value,
      color.value);
    title.value = '';
    infoList.value = '';
    authorName.value = '';
    color.value = '';
  };

  const animateClass = props.animate ? 'added-post-it' : '';
  return (
    <li
      className={`WhiteboardPostIt-post-it ${animateClass}`}
      style={{ backgroundColor: props.color }}
    >
      <div className="WhiteboardPostIt-title">
        <h1>{props.title}</h1>
        <input
          type="text"
          ref={(currentElement) => { title = currentElement; }}
          placeholder="new title"
        />
        <li>{props.infoList}</li>
        <input
          type="text"
          ref={(currentElement) => { infoList = currentElement; }}
          placeholder="new on list"
        />
        <h5>{props.authorName}</h5>
        <input
          type="text"
          ref={(currentElement) => { authorName = currentElement; }}
          placeholder="new name"
        />
        <select
          name="color"
          ref={(currentElement) => { color = currentElement; }}
        >
          <option value="">Choose color</option>
          <option
            value="#ff99cc"
          >
            Pink
          </option>
          <option
            value="#66ccff"
          >
            Blue
          </option>
          <option
            value="#ccff99"
          >
            Green
          </option>
          <option
            value="#ffff99"
          >
            Yellow</option>
        </select>
      </div>
      <button
        onClick={handleRemove}
      >
      X
      </button>
      <button
        onClick={handleUpdate}
      >
      Edit
      </button>
    </li>
  );
};

WhiteboardPostIt.propTypes = whiteboardPostItProps;

export default WhiteboardPostIt;
