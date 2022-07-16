import React from "react";

function ProjectFilter() {
  return (
    <div className="lg:sticky lg:top-4">
      <details
        open
        className="overflow-hidden border border-neutral-300 rounded"
      >
        <summary className="flex items-center justify-between px-5 py-3 bg-neutral-300 lg:hidden">
          <span className="text-sm font-medium">Project Filters</span>

          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <form action="" className="border-t border-neutral-200 lg:border-t-0">
          <fieldset>
            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <input
                  id="imagesCheck"
                  type="checkbox"
                  name="imagesCheck"
                  className="w-5 h-5 border-neutral-300 rounded"
                />

                <label
                  htmlFor="imagesCheck"
                  className="ml-3 text-sm font-medium"
                >
                  Has Images
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="projectComplete"
                  type="checkbox"
                  name="projectComplete"
                  className="w-5 h-5 border-neutral-300 rounded"
                />

                <label
                  htmlFor="projectComplete"
                  className="ml-3 text-sm font-medium"
                >
                  Complete Project
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-neutral-500 underline"
                >
                  Reset
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-sm font-medium bg-neutral-200">
                Categories
              </legend>

              <summary className="flex items-center justify-between px-5 py-3 bg-neutral-50">
                <span className="text-xs font-medium">Fiber & Textiles</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              <div className="px-5 py-6 space-y-2">
                <div className="flex items-center">
                  <input
                    id="cross-stitch"
                    type="checkbox"
                    name="cross-stitch"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="cross-stitch"
                    className="ml-3 text-sm font-medium"
                  >
                    Cross-stitch
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="crochet"
                    type="checkbox"
                    name="crochet"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label htmlFor="crochet" className="ml-3 text-sm font-medium">
                    Crochet
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="embroidery"
                    type="checkbox"
                    name="embroidery"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="embroidery"
                    className="ml-3 text-sm font-medium"
                  >
                    Embroidery
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="felting"
                    type="checkbox"
                    name="felting"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label htmlFor="felting" className="ml-3 text-sm font-medium">
                    Felting
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="knitting"
                    type="checkbox"
                    name="knitting"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="knitting"
                    className="ml-3 text-sm font-medium"
                  >
                    Knitting
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="lacemaking"
                    type="checkbox"
                    name="lacemaking"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="lacemaking"
                    className="ml-3 text-sm font-medium"
                  >
                    Lacemaking
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="macrame"
                    type="checkbox"
                    name="macrame"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label htmlFor="macrame" className="ml-3 text-sm font-medium">
                    Macramé
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="millinery"
                    type="checkbox"
                    name="millinery"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="millinery"
                    className="ml-3 text-sm font-medium"
                  >
                    Millinery
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="quilting"
                    type="checkbox"
                    name="quilting"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="quilting"
                    className="ml-3 text-sm font-medium"
                  >
                    Quilting
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="rug-making"
                    type="checkbox"
                    name="rug-making"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="rug-making"
                    className="ml-3 text-sm font-medium"
                  >
                    Rug making
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="sewing"
                    type="checkbox"
                    name="sewing"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label htmlFor="sewing" className="ml-3 text-sm font-medium">
                    Sewing
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="shoemaking"
                    type="checkbox"
                    name="shoemaking"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="shoemaking"
                    className="ml-3 text-sm font-medium"
                  >
                    Shoemaking
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="spinning"
                    type="checkbox"
                    name="spinning"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="spinning"
                    className="ml-3 text-sm font-medium"
                  >
                    Spinning
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="tapestry"
                    type="checkbox"
                    name="tapestry"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label
                    htmlFor="tapestry"
                    className="ml-3 text-sm font-medium"
                  >
                    Tapestry
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="weaving"
                    type="checkbox"
                    name="weaving"
                    className="w-5 h-5 border-neutral-300 rounded"
                  />

                  <label htmlFor="weaving" className="ml-3 text-sm font-medium">
                    Weaving
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="text-xs text-neutral-500 underline"
                  >
                    Reset Categories
                  </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between px-5 py-3 border-t border-neutral-200">
            <button
              name="reset"
              type="button"
              className="text-xs font-medium text-neutral-600 underline rounded"
            >
              Reset All
            </button>

            <button
              name="commit"
              type="button"
              className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </details>
      {/* <script>
  window.addEventListener('resize', () => {
    const desktopScreen = window.innerWidth < 768

    document.querySelector('details').open = !desktopScreen
  })
</script> */}
    </div>
  );
}

export default ProjectFilter;
