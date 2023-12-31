import Footer from './Footer';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import Container from './container';

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
