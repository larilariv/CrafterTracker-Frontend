import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <header className="bg-neutral-800">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <Link to="/" className="block text-cyan-400">
            <img
              src={process.env.PUBLIC_URL + "logo-darkmode.svg"}
              width="125"
              alt="logo"
            />
          </Link>

          <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              <ul className="flex items-center gap-6 text-md">
                {user ? (
                  <>
                    <Link
                      to="/projects"
                      className="text-white/75 transition hover:text-white"
                    >
                      My Project Gallery
                    </Link>
                    <Link
                      to="/materials"
                      className="text-white/75 transition hover:text-white"
                    >
                      My Material "Stash"
                    </Link>
                  </>
                ) : // <>
                //   <Link
                //     to="/public_projects"
                //     className="text-white/75 transition hover:text-white"
                //   >
                //     {/* Project Gallery */}
                //   </Link>
                // </>
                null}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex">
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="hidden sm:block px-4 py-2 text-md text-white/75 transition hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </Link>
                    <Link
                      onClick={logoutUser}
                      to="/login"
                      className="hidden sm:block px-5 py-2.5 text-sm text-cyan-100 bg-cyan-700 hover:bg-cyan-500 hover:text-white transition rounded-md"
                    >
                      Log out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="hidden sm:block px-5 py-2.5 text-sm text-neutral-200 bg-neutral-700 hover:bg-neutral-500 hover:text-white transition rounded-md"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="hidden sm:block px-5 py-2.5 text-sm text-cyan-100 bg-cyan-700 hover:bg-cyan-500 hover:text-white transition rounded-md"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>

              {/* <button className="block p-2.5 text-neutral-200 bg-neutral-700 rounded md:hidden hover:bg-neutral-500 hover:text-white transition">
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
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
