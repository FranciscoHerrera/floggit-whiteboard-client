import PropTypes from 'prop-types';

const propTypes = {
  postIts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })),
  onItemRemove: PropTypes.func.isRequired,
  onItemUpdate: PropTypes.func.isRequired,
};

export default propTypes;
