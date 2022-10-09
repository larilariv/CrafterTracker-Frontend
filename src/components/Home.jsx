import React from "react";

function Home() {
  return (
    <div className="max-w-lg mx-auto my-40">
      <h1 className="mt-8 text-xl font-bold text-center text-cyan-500 sm:text-3xl">
        Welcome to
      </h1>
      <img src={process.env.PUBLIC_URL + "logo-lightmode.svg"} alt="logo" />
      <p className="max-w-lg mx-auto mb-4 text-center text-neutral-500">
        This project is currently in progress, but feel free to click around!{" "}
      </p>
      <p className="max-w-lg mx-auto mb-8 text-center text-neutral-500">
        Checkout{" "}
        <a
          href="https://github.com/larilariv/CrafterTracker-Frontend"
          className="font-bold text-cyan-600 hover:text-cyan-500"
          target="_blank"
          rel="noreferrer noopener"
        >
          my GitHub repo
        </a>{" "}
        to see what's ahead and keep up with the latest developments!
      </p>
    </div>
  );
}

export default Home;
