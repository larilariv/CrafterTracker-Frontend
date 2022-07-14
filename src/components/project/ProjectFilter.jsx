import React from "react";

function ProjectFilter() {
  return (
    <div>
      <form
        className="relative w-screen max-w-lg mx-auto overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl"
        role="dialog"
        aria-label="Filters"
      >
        <header className="p-6 text-center">
          <p className="text-lg font-medium">Filter Projects</p>
        </header>

        <main className="flow-root p-6 overflow-y-auto h-96">
          <div className="-my-8 divide-y divide-gray-100">
            <div className="py-8">
              <fieldset>
                <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-gray-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Has Image</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-gray-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Is Complete</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>

            <div className="py-8">
              <fieldset>
                <legend className="text-xl font-medium">Categories</legend>
                <legend className="text-l font-medium">Fiber Arts</legend>
                <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-gray-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Full Time</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-gray-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Part Time</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-between p-6">
          <button
            className="text-sm font-medium text-gray-600 underline"
            type="button"
          >
            Clear all
          </button>

          <button
            className="px-5 py-3 font-medium text-white bg-black rounded-lg"
            type="submit"
          >
            Show Results
          </button>
        </footer>
      </form>
    </div>
  );
}

export default ProjectFilter;
