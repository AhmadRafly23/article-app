import PropTypes from 'prop-types';
import Alert from './Alert';

function NoLayout({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white flex items-center justify-center">
      <Alert />
      {children}
    </div>
  );
}

export default NoLayout;

NoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
