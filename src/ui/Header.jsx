import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div>
        <div className="container mx-auto flex justify-start items-center py-4">
          <div className="relative group">
            <div className="mx-10 text-gray-500">프로젝트명</div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-extrabold rounded-lg text-2xl mx-16 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                className="z-50 absolute mt-2 mx-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
            className="flex justify-end mr-10 p-4 px-5"
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
