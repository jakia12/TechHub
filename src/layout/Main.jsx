import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import profilePic from "../images/profile.jpg";
import "./Main.css";

const Main = () => {
  //hide sidenav by default
  const [isOpen, setIsOpen] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  //nav menu active style
  let activeStyle = {
    // backgroundColor: "#",
    color: "#3F83F8",
    // paddingRight: 11,
    // paddingLeft: 11,
    // paddingTop: 7,
    // paddingBottom: 7,
  };

  return (
    <>
      <section className="">
        <div className="w-full">
          <div className="md:flex">
            <div className="w-1/5 lg:block hidden">
              <div
                id="drawer-navigation"
                className="drawer_height w-1/5  z-40 fixed left-0 top-0 p-4 h-full bg-[#111418] dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-navigation-label"
              >
                <div className="py-2 ">
                  {/* <span className="text-center text-2xl font-medium whitespace-nowrap text-white py-4">
                      Jessica Doe
                    </span> */}

                  <div className="flex items-center justify-center">
                    <Link to="/" className="flex items-center justify-center">
                      <div className="py-3 text-center">
                        <img
                          src={profilePic}
                          className="rounded-full max-w-30 max-h-30 user_image border-8 border-[#343a40]
                          "
                          alt="User Photo"
                        />
                        <h4 className="text-xl mt-5  text-semibold text-white">
                          Jessica Doe
                        </h4>
                      </div>
                    </Link>
                  </div>

                  <hr className="divider_line my-2" />
                  <ul className="space-y-2 flex flex-col items-center justify-center">
                    <li>
                      <NavLink
                        to="/"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">About</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">Services</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/portfolios"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">Portfolios</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/testimonials"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">Testimonials</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white dark:hover:bg-gray-700 text-gray-100"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="ml-3">Contact</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* dashboard main part */}
            <div className="w-full lg:w-4/5">
              <div>
                <div className="bg-[#000] md:hidden block py-6 px-3 relative">
                  <div className="flex items-center justify-between px-6">
                    <Link to="/">
                      <span className="text-2xl italic text-semibold text-white">
                        Jessica Doe
                      </span>
                    </Link>
                    <span
                      className=" text-white  mx-3 md:hidden cursor-pointer"
                      title="Open sidenav"
                      onClick={handleToggle}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <Outlet />
                {/* sidenav for mobile screen */}
                <div className="">
                  <div
                    id="drawer-navigation"
                    className={`side_nav block lg:hidden z-40 h-screen p-4  bg-[#111] w-80 dark:bg-gray-800 ${
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
                    <div className="py-14 overflow-y-auto px-7">
                      {/* <Link to="/" className="flex items-center justify-center">
                        <span className="text-center text-2xl font-medium whitespace-nowrap text-white py-4">
                          TechHub
                        </span>
                      </Link> */}

                      {/* mobile menu */}
                      <ul className="space-y-2 flex flex-col items-center justify-center">
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
