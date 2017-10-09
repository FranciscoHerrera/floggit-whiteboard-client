import { connect } from 'react-redux';

import WhiteboardWrapper from './WhiteboardWrapper';
import { addPostIt, removePostIt, updatePostIt } from '../../../reduxStore/config/postIts';

const mapStateToProps = state => ({
  postIts: state.postIts,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removePostIt(id));
  },
  handleAdd: (title, infoList, authorName, color) => {
    dispatch(addPostIt(title, infoList, authorName, color));
  },
  handelUpdate: (id, title, infoList, authorName, color) => {
    dispatch(updatePostIt(id, title, infoList, authorName, color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
