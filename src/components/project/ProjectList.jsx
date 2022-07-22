import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ProjectFilter from "./ProjectFilter";

function ProjectList() {
  let [projects, setProjects] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  let getProjects = async () => {
    let response = await fetch("http://localhost:8000/api/projects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setProjects(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
        <ProjectFilter />
        <div className="lg:col-span-3">
          {/* Sort Dropdown */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              <span className="hidden sm:inline">Showing</span>6 of 24 Products
            </p>

            <div className="ml-4">
              <label htmlFor="SortBy">Sort</label>

              <select
                id="SortBy"
                name="sort_by"
                className="text-sm border-neutral-200 rounded"
              >
                <option readOnly>Sort</option>
                <option value="title-asc">Title, A-Z</option>
                <option value="title-desc">Title, Z-A</option>
              </select>
            </div>
          </div>
          {/* Project Card */}
          <div className="grid grid-cols-1 gap-px mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              return (
                <div className="p-2">
                  <Link
                    to={`/projects/${project.id}`}
                    key={project.id}
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
                      alt="Project image placeholder"
                      loading="lazy"
                    />

                    <div className="p-6">
                      <h5 key={project.name} className="mt-2 text-lg font-bold">
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
