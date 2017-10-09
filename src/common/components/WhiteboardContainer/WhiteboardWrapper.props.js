import PropTypes from 'prop-types';

const propTypes = {
  postIts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })),
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default propTypes;
