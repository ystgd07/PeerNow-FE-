import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div>
        <div className="container flex items-center justify-start py-4 mx-auto">
          <div className="relative group">
            <div className="mx-10 text-gray-500">프로젝트명</div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="inline-flex items-center mx-16 text-2xl font-extrabold text-center text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              SNOW
              <svg
                className={`w-2.5 h-2.5 ml-2.5 transform ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute z-50 mx-16 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      WeaterNOW
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      SNOW
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      PeerNOW
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      NOW
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a
            href="#"
            className="flex justify-end p-4 px-5 mr-10"
            style={{ marginLeft: 'auto' }}
          >
            &#8942;
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
