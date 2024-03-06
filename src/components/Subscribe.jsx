import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="bg-gray-100 min-w-full py-10 sm:py-16">
        <div className="container flex flex-wrap items-center">
          <div className="text w-full sm:w-1/2">
            <h2 className="text-4xl w-5/6 text-stone-700 my-6 font-bold">
              Start Learning
            </h2>
            <p className="text-xl w-5/6 my-6">
              Get the latest articles, tutorials, and free resources from
              Morphocode
            </p>
          </div>
          <div className="form_subscribe w-full sm:w-1/2">
            <form action="#">
              <label
                htmlFor="email"
                className="flex flex-col sm:flex-row  rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
              >
                <input
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  type="email"
                  name="email"
                  id="email"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-md text-white"
                >
                  Subscribe
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
