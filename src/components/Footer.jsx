import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="bg-neutral-800">
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
            <a
              onClick={scrollToTop}
              href="#!"
              className="inline-block p-2 text-cyan-500 transition bg-neutral-700 rounded-full sm:p-3 lg:p-4 hover:bg-neutral-500 hover:text-cyan-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-cyan-400 lg:justify-start">
                <Link to="/" href="https://craftertracker.herokuapp.com/">
                  <img
                    src={process.env.PUBLIC_URL + "logo-darkmode.svg"}
                    width="125"
                    alt="logo"
                  />
                </Link>
              </div>

              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white/75 lg:text-left">
                Created by Larissa Vieira during General Assembly's Software
                Engineering Immersive.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-white/75 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
