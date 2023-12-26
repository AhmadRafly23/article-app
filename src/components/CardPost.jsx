import { Link } from 'react-router-dom';
import InfoPost from './InfoPost';
import PropTypes from 'prop-types';

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link to="/detail">
        <img src={thumbnail} alt="" className="w-full rounded mb-4" />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;

CardPost.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};
