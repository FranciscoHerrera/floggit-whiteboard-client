import whiteboardAPI from '../../utils/whiteboardAPI';

// ACTIONS
const POSTIT_ADD = 'POSTIT_ADD';
const POSTIT_REMOVE = 'POSTIT_REMOVE';
const POSTIT_LIST_REPLACE = 'POSTIT_LIST_REPLACE';
const POSTIT_UPDATE = 'POSTIT_UPDATE';

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case POSTIT_ADD: {
      return [...state, action.data];
    }
    case POSTIT_REMOVE: {
      return state.filter(postIt => postIt.id !== action.data.id);
    }
    case POSTIT_LIST_REPLACE: {
      return [...action.data.postIts];
    }
    case POSTIT_UPDATE: {
      return state.map(postIt => ((postIt.id === action.data.id) ?
        { ...postIt, ...action.data.id } : postIt));
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddPostIt = (id, title, infoList, authorName, color) => ({
  type: POSTIT_ADD,
  data: { id, title, infoList, authorName, color },
});

const internalRemovePostIt = id => ({
  type: POSTIT_REMOVE,
  data: { id },
});

const internalReplaceAllPostIts = postIts => ({
  type: POSTIT_LIST_REPLACE,
  data: { postIts },
});

const internalUpdatePostIt = (id, title, infoList, authorName, color) => ({
  type: POSTIT_UPDATE,
  data: { title, infoList, authorName, color },
});

// Redux thunk action creators
const addPostIt = (title, infoList, authorName, color) => dispatch =>
  whiteboardAPI.add(title, infoList, authorName, color)
    .then((id) => {
      dispatch(internalAddPostIt(id, title, infoList, authorName, color));
    });

const removePostIt = id => dispatch => whiteboardAPI.remove(id)
  .then(() => {
    dispatch(internalRemovePostIt(id));
  });

const loadPostIts = () => dispatch => whiteboardAPI.getAll()
  .then((postIts) => {
    dispatch(internalReplaceAllPostIts(postIts));
  });

const updatePostIt = (id, title, infoList, authorName, color) => dispatch =>
  whiteboardAPI.update(id, title, infoList, authorName, color)
    .then(() => {
      dispatch(internalUpdatePostIt(title, infoList, authorName, color));
      dispatch(loadPostIts());
    });

export { addPostIt, removePostIt, loadPostIts, updatePostIt };
export default reducer;
