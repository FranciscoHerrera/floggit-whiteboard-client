import React from 'react';

import whiteboardInputProps from './WhiteboardInput.props';
import { COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_NAME_1, COLOR_NAME_2, COLOR_NAME_3, COLOR_NAME_4 } from '../constants';

const WhiteboardInput = (props) => {
  let title;
  let infoList;
  let authorName;
  let color;
  let visible;

  const hideAdd = () => {
    visible.style.display = 'none';
  };

  const showAdd = () => {
    visible.style.display = 'block';
  };

  const handleClick = () => {
    props.onAdd(title.value, infoList.value, authorName.value, color.value);
    title.value = '';
    infoList.value = '';
    authorName.value = '';
    color.value = '';
    hideAdd();
  };

  return (
    <div className="create-postIt">
      <button type="button" onClick={showAdd}>
      + Add
      </button>
      <div
        className="show-input"
        ref={(currentElement) => { visible = currentElement; }}
      >
        <input
          type="text"
          ref={(currentElement) => { title = currentElement; }}
          placeholder="Title"
        />
        <textarea
          ref={(currentElement) => { infoList = currentElement; }}
          name="info-list"
        />
        <input
          type="text"
          ref={(currentElement) => { authorName = currentElement; }}
          placeholder="Signature"
        />
        <select
          name="color"
          ref={(currentElement) => { color = currentElement; }}
        >
          <option value={COLOR_1}>{COLOR_NAME_1}</option>
          <option value={COLOR_2}>{COLOR_NAME_2}</option>
          <option value={COLOR_3}>{COLOR_NAME_3}</option>
          <option value={COLOR_4}>{COLOR_NAME_4}</option>
        </select>
        <button
          type="button"
          id="save"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

WhiteboardInput.propTypes = whiteboardInputProps;

export default WhiteboardInput;
