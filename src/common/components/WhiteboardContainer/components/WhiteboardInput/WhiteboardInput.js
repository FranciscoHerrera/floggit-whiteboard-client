import React from 'react';

import whiteboardInputProps from './WhiteboardInput.props';

const WhiteboardInput = (props) => {
  let title;
  let infoList;
  let authorName;
  let color;

  const handleClick = () => {
    props.onAdd(title.value, infoList.value, authorName.value, color.value);
    title.value = '';
    infoList.value = '';
    authorName.value = '';
    color.value = '';
  };

  return (
    <div>
      <input
        type="text"
        ref={(currentElement) => { title = currentElement; }}
        placeholder="title"
      />
      <textarea
        ref={(currentElement) => { infoList = currentElement; }}
        name="info-list"
      />
      <input
        type="text"
        ref={(currentElement) => { authorName = currentElement; }}
        placeholder="name"
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
      <button
        type="button"
        onClick={handleClick}
      >
          add post-it
      </button>
    </div>
  );
};


WhiteboardInput.propTypes = whiteboardInputProps;

export default WhiteboardInput;
