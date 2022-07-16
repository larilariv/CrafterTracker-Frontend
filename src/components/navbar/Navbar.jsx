import React from "react";

function Navbar() {
  return (
    <div>
      <header className="bg-neutral-800">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <a className="block text-cyan-400" href="/">
            <span className="sr-only">Home</span>
            <img
              src={process.env.PUBLIC_URL + "logo-darkmode.svg"}
              width="125"
              alt="logo"
            />
          </a>

          <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a
                    className="text-white/75 transition hover:text-white"
                    href="/"
                  >
                    Project Gallery
                  </a>
                </li>

                <li>
                  <a
                    className="text-white/75 transition hover:text-white"
                    href="/"
                  >
                    Material Stash
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex">
                <a
                  className="block px-5 py-2.5 text-sm font-medium text-cyan-100 bg-cyan-700 hover:bg-cyan-500 hover:text-white transition rounded-md"
                  href="/"
                >
                  Log in
                </a>

                <a
                  className="hidden sm:block px-5 py-2.5 text-sm font-medium text-neutral-200 bg-neutral-700 hover:bg-neutral-500 hover:text-white transition rounded-md"
                  href="/"
                >
                  Sign up
                </a>
              </div>

              <button className="block p-2.5 text-neutral-200 bg-neutral-700 rounded md:hidden hover:bg-neutral-500 hover:text-white transition">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
