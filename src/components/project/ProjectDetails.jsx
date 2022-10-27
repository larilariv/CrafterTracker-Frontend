import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function ProjectDetails() {
  let [project, setProject] = useState([]);
  const { id } = useParams();
  let { authTokens, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  let getProjectDetails = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/projects/${id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      setProject(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let deleteProject = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/projects/${id}/delete/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    if (response.status === 200) {
      navigate("/projects");
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  useEffect(() => {
    getProjectDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {/* Main Image */}
          <img
            className="object-contain w-full h-64 lg:h-72 p-2"
            src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
            alt="placeholder"
            loading="lazy"
          />
          {/* Extra Images */}
          <div className="grid grid-cols-2 gap-4 lg:mt-4">
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-contain w-full h-64 lg:h-72 p-2"
                src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
                alt="placeholder"
                loading="lazy"
              />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-contain w-full h-64 lg:h-72 p-2"
                src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
                alt="placeholder"
                loading="lazy"
              />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-contain w-full h-64 lg:h-72 p-2"
                src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
                alt="placeholder"
                loading="lazy"
              />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-contain w-full h-64 lg:h-72 p-2"
                src={process.env.PUBLIC_URL + "image-placeholder-500px.png"}
                alt="placeholder"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="sticky top-0">
          {/* Categories as tags, complete tag in green would be nice edition */}
          <strong className="border border-cyan-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-neutral-100 text-cyan-600">
            Category
          </strong>

          {/* Project Name, User, and Edit/Delete buttons */}
          <div className="flex justify-between mt-8">
            <div className="max-w-[35ch]">
              <h1 className="text-2xl font-bold">{project.name}</h1>

              <p className="mt-0.5">
                Made by{" "}
                <span className="text-md font-bold text-cyan-600">
                  {project.user}
                </span>
              </p>
            </div>

            <div className="flex items-center -space-x-4 hover:space-x-1">
              <button
                className="z-10 block p-4 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full hover:scale-110 active:bg-green-200"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>

              <button
                className="z-20 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 active:bg-red-200"
                type="button"
                onClick={deleteProject}
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Project Description */}
          <details className="relative mt-4 group">
            <summary className="block">
              <div
                className="prose max-w-none
                    //  group-open:hidden
                     "
              >
                <p>{project.description}</p>
              </div>
            </summary>
          </details>

          {/* Materials, Notes, and Resources tabs */}
          <ul className="flex border-b border-neutral-100">
            <li className="flex-1">
              <a className="relative block p-4" href="#/materials">
                <span className="absolute inset-x-0 w-full h-px bg-cyan-500 -bottom-px"></span>

                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-neutral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-neutral-900">
                    Materials
                  </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a className="relative block p-4" href="#/notes">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-neutral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-neutral-900">
                    Notes
                  </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a className="relative block p-4" href="#/resources">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-neutral-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-neutral-900">
                    Resources
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
