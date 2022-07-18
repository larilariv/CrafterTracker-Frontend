import React from "react";

function ProjectCard() {
  return (
    <div className="p-2">
      <a
        className="relative block bg-white border border-neutral-200 rounded"
        href=""
      >
        <button
          className="absolute p-2 text-white text-red-400 border border-red-400 rounded-full right-5 top-5 hover:text-white hover:bg-red-400 active:bg-red-400 focus:outline-none focus:ring"
          type="button"
          name="like"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          className="object-contain w-full h-64 lg:h-72 p-2"
          src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
          alt="Project image placeholder"
          loading="lazy"
        />

        <div className="p-6">
          <h5 className="mt-2 text-lg font-bold">Project Name</h5>

          <p className="mt-2 text-sm text-neutral-700">creator username</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
