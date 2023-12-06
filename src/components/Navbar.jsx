import { Link } from 'react-router-dom';
import Container from './container';
import { useState } from 'react';

function Navbar() {
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
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
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
                  <ul className='absolute w-["200px"] mt-4 bg-gray-800 rounded shadow-2xl'>
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
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
