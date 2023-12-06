import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PostMetaTitle({ category, title, date, center }) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
        <Link to="/detail">{title}</Link>
      </h2>
    </>
  );
}

export default PostMetaTitle;

PostMetaTitle.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  center: PropTypes.bool,
};
