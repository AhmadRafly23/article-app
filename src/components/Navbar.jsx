import { Link } from 'react-router-dom';
import Container from './container';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { authenticated } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [offcavnas, setOffcanvas] = useState(false);

  const dropdownList = [
    { text: 'Internet', href: '/posts' },
    { text: 'Books', href: '/posts' },
    { text: 'Open Source', href: '/posts' },
  ];

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcavnas)}>
              <svg
                width="24"
                height="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-6/12 lg:w-2/12">
            <Link
              to="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                A
              </div>
              Articles
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <svg
                width="24"
                height="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-6/12 z-50 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
              offcavnas ? 'left-0' : '-left-full'
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffcanvas(false)}
            >
              <svg
                height="24"
                width="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-14">
              <li className="block lg:hidden">
                {/* <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 border border-gray-300 rounded-sm hover:bg-gray-300 hover:text-gray-600"
                >
                  Login
                </button> */}
                <div className="space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-600 border border-gray-300 rounded-sm hover:bg-gray-300 hover:text-gray-600"
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-600 border text-red-300 border-red-300 rounded-sm hover:bg-red-300 hover:text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Front-End
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Back-End
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center">
                  <span className="hover:underline">Lainnya</span>
                  <svg
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`ml-2 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    width="16"
                    height="16"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
                {isDropdownOpen && (
                  <ul className='absolute w-["200px"] mt-4 bg-gray-800 rounded shadow-2xl z-50'>
                    {dropdownList.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="hover:underline block py-2 px-4"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`w-full lg:w-3/12 absolute lg:static left-0 px-10 lg:px-0 transition-all ${
              isSearchOpen ? 'top-10' : '-top-40'
            }`}
          >
            <button
              className="absolute top-3 right-14 lg:hidden"
              onClick={() => setIsSearchOpen(false)}
            >
              <svg
                height="24"
                width="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Search ..."
            />
          </div>
          <div className="w-1/12 hidden justify-end lg:flex">
            {authenticated ? (
              <button
                type="button"
                className="rounded-full p-2 bg-gray-400 hover:scale-105"
              >
                <svg
                  width="24"
                  height="24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 border border-gray-300 rounded-sm hover:bg-gray-300 hover:text-gray-600"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
