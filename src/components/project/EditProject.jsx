import React from "react";

function EditProject() {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Edit Project</h1>
      </div>

      <form action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
        {/* Name input */}
        <div>
          <header className="text-left">
            <h1 className="mt-4 text-md">Name</h1>
          </header>
          <input
            className="relative block w-full p-3 text-sm border-2 border-neutral-700 rounded-lg bg-neutral-100 focus:border-neutral-700 focus:ring-0"
            id="name"
            type="text"
            placeholder="Name"
            onChange=""
          />
        </div>

        {/* Short description input */}
        <div>
          <header className="text-left">
            <h1 className="mt-4 text-md">Description</h1>
          </header>
          <input
            className="relative block w-full p-3 text-sm border-2 border-neutral-700 rounded-lg bg-neutral-100 focus:border-neutral-700 focus:ring-0"
            id="description"
            type="text"
            placeholder="Short description"
            onChange=""
          />
        </div>

        {/* Categories accordion */}
        <div>
          <header className="text-left">
            <h1 className="mt-4 text-md">Category</h1>
            <p className="text-xs text-neutral-500">
              Select the categories that apply to your project from the
              dropdowns below
            </p>
          </header>
          {/* Filber & Textiles */}
          <details
            className="group mt-2 border-2 border-neutral-700 rounded-lg"
            closed="true"
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-neutral-100">
              <h5 className="font-medium text-neutral-900">Fiber & Textiles</h5>
              <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div>
              <fieldset>
                <ul className="grid grid-cols-1 gap-4 my-4 mx-14 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Cross-stitch</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Crocheting</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Embroidery</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Felting</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Knitting</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Lace-making</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Macrame</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Millenery</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Quilting</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Rug making</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Sewing</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Shoemaking</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Spinning</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Tapestry</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Weaving</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </details>
          {/* Canvas & Paper */}
          <details
            className="group mt-4 border-2 border-neutral-700 rounded-lg"
            closed="true"
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-neutral-100">
              <h5 className="font-medium text-neutral-900">Canvas & Paper</h5>
              <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div>
              <fieldset>
                <ul className="grid grid-cols-1 gap-4 my-4 mx-14 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Bookbinding</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Calligraphy</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Cardmaking</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Collage</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Decoupage</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Origami</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Papier-mâché</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Quilling</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Scrapbooking</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Stamping</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </details>
          {/* Clay, Metal, & Wood */}
          <details
            className="group mt-4 border-2 border-neutral-700 rounded-lg"
            closed="true"
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-neutral-100">
              <h5 className="font-medium text-neutral-900">
                Clay, Metal, & Wood
              </h5>
              <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div>
              <fieldset>
                <ul className="grid grid-cols-1 gap-4 my-4 mx-14 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Cabinet making</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Chip carving</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Jewelry</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Metalworking</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Pottery</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Sculpture</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Woodworking</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Wood burning</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Wood turning</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </details>
          {/* Misc. */}
          <details
            className="group mt-4 border-2 border-neutral-700 rounded-lg"
            closed="true"
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-neutral-100">
              <h5 className="font-medium text-neutral-900">Misc.</h5>
              <svg
                className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div>
              <fieldset>
                <ul className="grid grid-cols-1 gap-4 my-4 mx-14 sm:grid-cols-2">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Basket-weaving</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Beadwork</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Doll making</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Egg decorating</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Etching</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Floral design</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Mosaics</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Stained glass</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-6 h-6 border border-neutral-200 rounded-md"
                      />
                      <span className="ml-3 font-medium">Toy making</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </details>
        </div>

        {/* Image Upload */}
        <div>
          <header className="text-left">
            <h1 className="mt-4 text-md">Images</h1>
            <p className="text-xs text-neutral-500">
              Upload images of your project progress and completion
            </p>
          </header>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-700 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-neutral-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-neutral-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        <script type="text/javascript">
          const checkbox = document.getElementById("flexCheckIndeterminate");
          checkbox.indeterminate = true;
        </script>

        {/* Materials and Resources buttons */}
        <div>
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            href="https://craftertracker.herokuapp.com/materials"
          >
            <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-4">
              Materials
            </span>
          </a>

          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            href="https://craftertracker.herokuapp.com/resources"
          >
            <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-4">
              Resources
            </span>
          </a>
        </div>

        {/* Start and End date pickers */}
        <div date-rangepicker className="flex items-center">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-neutral-500 dark:text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="start"
              type="text"
              className="bg-neutral-100 border-2 border-neutral-700 rounded-lg text-neutral-900 sm:text-sm block w-full pl-10 p-2.5 focus:border-neutral-700 focus:ring-0 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-neutral-700">to</span>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-neutral-500 dark:text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="end"
              type="text"
              className="bg-neutral-100 border-2 border-neutral-700 rounded-lg text-neutral-900 sm:text-sm block w-full pl-10 p-2.5 focus:border-neutral-700 focus:ring-0 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white"
              placeholder="Select date end"
            />
          </div>
        </div>

        {/* Notes textarea */}
        <div>
          <header className="text-left">
            <h1 className="mt-4 text-md">Notes</h1>
          </header>
          <textarea
            className="form-control block w-full p-3 text-sm text-neutral-700 bg-neutral-100 bg-clip-padding border-2 border-neutral-700 rounded-lg focus:border-neutral-700 focus:ring-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Notes"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block w-full px-5 py-3 text-sm font-medium text-white transition bg-lime-500 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            Submit changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProject;
