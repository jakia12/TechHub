import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  //hide sidenav by default
  const [isOpen, setIsOpen] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <section className="">
        <div className="w-full">
          <div className="md:flex">
            <div className="w-1/5 lg:block hidden">
              <div
                id="drawer-navigation"
                className="drawer_height w-1/5  z-40 fixed left-0 top-0 p-4 overflow-y-auto h-full bg-[#111418] dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-navigation-label"
              >
                <div className="py-4 ">
                  <Link to="/" className="flex items-center justify-center">
                    <span className="text-center text-2xl font-medium whitespace-nowrap text-white py-4">
                      TechHub
                    </span>
                  </Link>

                  <div className="flex items-center justify-center">
                    <div className="py-3 text-center">
                      <img
                        src={""}
                        className="rounded-full max-w-30 max-h-30 user_image"
                        alt="User Photo"
                      />
                      <h4 className="text-lg mt-5 mb-2 text-medium text-white">
                        {user?.displayName}
                      </h4>
                    </div>
                  </div>

                  <hr className="divider_line my-3" />
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/portfolios"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">Portfolios</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/testimonials"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">Testimonials</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                      >
                        <span className="ml-3">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* dashboard main part */}
            <div className="w-full lg:w-4/5">
              <div>
                <Outlet />
                {/* sidenav for mobile screen */}
                <div className="">
                  <div
                    id="drawer-navigation"
                    className={`side_nav block lg:hidden z-40 h-screen p-4  bg-white w-80 dark:bg-gray-800 ${
                      isOpen === true ? "activ" : ""
                    }`}
                    tabindex="-1"
                    aria-labelledby="drawer-navigation-label"
                  >
                    {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5> */}

                    <button
                      type="button"
                      data-drawer-dismiss="drawer-navigation"
                      aria-controls="drawer-navigation"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleToggle}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4 overflow-y-auto px-7">
                      <Link to="/" className="flex items-center justify-center">
                        <span className="text-center text-2xl font-medium whitespace-nowrap text-white py-4">
                          TechHub
                        </span>
                      </Link>

                      <hr className="divider_line my-3" />
                      {/* mobile menu */}
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="/"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">Home</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/about"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">About</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">Services</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/portfolios"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">Portfolios</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/testimonials"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">Testimonials</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/contact"
                            className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                          >
                            <span className="ml-3">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
