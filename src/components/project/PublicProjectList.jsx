import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PublicProjectList() {
  let [projects, setProjects] = useState([]);

  let getProjects = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/publicprojects/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              {/* Project Card */}
              <div className="grid grid-cols-1 gap-px mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div className="p-2" key={`public-project-${project.id}`}>
                    <Link
                      to={`/publicprojects/${project.id}/`}
                      href="https://craftertracker.herokuapp.com/publicprojects/{project.id}"
                      className="relative block bg-white border border-neutral-200 rounded"
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
                        src={
                          process.env.PUBLIC_URL + "image-placeholder-500px.png"
                        }
                        alt="placeholder"
                        loading="lazy"
                      />

                      <div className="p-6">
                        <h5
                          key={project.name}
                          className="mt-2 text-lg font-bold"
                        >
                          {project.name}
                        </h5>

                        <p
                          key={project.user}
                          className="mt-2 text-md font-bold text-cyan-600"
                        >
                          {project.user}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PublicProjectList;
