import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="container mx-auto px-10">{children}</div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
