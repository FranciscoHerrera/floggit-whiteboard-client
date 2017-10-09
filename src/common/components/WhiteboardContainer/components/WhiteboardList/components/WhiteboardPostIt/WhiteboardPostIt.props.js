import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string.isRequired,
  infoList: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default props;
