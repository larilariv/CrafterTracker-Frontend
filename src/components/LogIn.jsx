import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function LogIn() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-cyan-500 sm:text-3xl">
            Get back tracking your crafty projects!
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-neutral-500">
            Log in to get back to making and sharing your crafty creations!
          </p>

          <form
            onSubmit={loginUser}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium">Log in to your account</p>

            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="relative block p-3 border-2 border-neutral-200 rounded-lg"
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
                />

                <span className="absolute text-xs font-medium text-neutral-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                  Username
                </span>
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-neutral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
              </label>
            </div>

            {/* Password Input */}
            <div>
              <label
                className="relative block p-3 border-2 border-neutral-200 rounded-lg"
                htmlFor="password"
              >
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
                />

                <span className="absolute text-xs font-medium text-neutral-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                  Password
                </span>
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-neutral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
              </label>
            </div>

            {/* Log in Button */}
            <button
              type="submit"
              className="inline-block w-full px-5 py-3 text-sm font-medium text-white transition bg-cyan-500 rounded-lg hover:scale-105 hover:shadow-xl"
            >
              Log in
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-center text-neutral-500">
              Don't have an account?&nbsp;
              <Link
                to="/signup"
                className="underline font-bold text-cyan-500 hover:text-cyan-600"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
