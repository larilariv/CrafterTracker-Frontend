import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <header className="bg-neutral-800">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <Link
            to="/allprojects"
            href="https://craftertracker.herokuapp.com/allprojects"
            className="block text-cyan-400"
          >
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
                      href="https://craftertracker.herokuapp.com/projects"
                      className="text-white/75 transition hover:text-white"
                    >
                      My Project Gallery
                    </Link>
                    <Link
                      to="/materials"
                      href="https://craftertracker.herokuapp.com/materials"
                      className="text-white/75 transition hover:text-white"
                    >
                      My Material "Stash"
                    </Link>
                  </>
                ) : // <>
                //   <Link
                //     to="/allprojects"
                //     href="https://craftertracker.herokuapp.com/allprojects"
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
                      to="/projects/new"
                      href="https://craftertracker.herokuapp.com/projects/new"
                      className="hidden sm:block px-5 py-2.5 text-sm text-lime-100 bg-lime-700 hover:bg-lime-500 hover:text-white transition rounded-md"
                    >
                      New Project
                    </Link>
                    <Link
                      onClick={logoutUser}
                      to="/login"
                      href="https://craftertracker.herokuapp.com/login"
                      className="hidden sm:block px-5 py-2.5 text-sm text-cyan-100 bg-cyan-700 hover:bg-cyan-500 hover:text-white transition rounded-md"
                    >
                      Log out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      href="https://craftertracker.herokuapp.com/login"
                      className="hidden sm:block px-5 py-2.5 text-sm text-neutral-200 bg-neutral-700 hover:bg-neutral-500 hover:text-white transition rounded-md"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      href="https://craftertracker.herokuapp.com/signup"
                      className="hidden sm:block px-5 py-2.5 text-sm text-cyan-100 bg-cyan-700 hover:bg-cyan-500 hover:text-white transition rounded-md"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>

              <button className="block p-2.5 text-neutral-200 bg-neutral-700 rounded md:hidden hover:bg-neutral-500 hover:text-white transition">
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
