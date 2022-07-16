import React from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <ProjectFilter />
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500">
                  <span className="hidden sm:inline">Showing</span>6 of 24
                  Products
                </p>

                <div className="ml-4">
                  <label htmlFor="SortBy" className="sr-only">
                    Sort
                  </label>

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

              <div className="grid grid-cols-1 gap-px mt-4 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
