import React from "react";
import { icons } from "../../PlaceholderData/Placeholder";
import aboutImg from "../../images/t7.jpg";

const About = () => {
  return (
    <section className="about_section py-14 lg:py-20 ">
      <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
        <div className="text-center pb-10 relative">
          <h2 className="text-4xl font-semibold text-dark py-3">About me</h2>
          <div className="bg-lightBlue w-24 h-1  m-0 mx-auto mb-10"></div>
        </div>
        <div className="md:flex">
          <div className="w-full lg:w-6/12">
            <img
              src={aboutImg}
              className="w-full about_img rounded border-2 border-lightBlue"
              alt=""
            />
          </div>
          <div className="w-full lg:w-6/12 flex items-center">
            <div className="text-left pt-3 md:pt-0 md:pl-3 ">
              <h2 className="text-2xl md:text-3xl my-3 font-semibold">
                Hi there ,{" "}
                <span className="text-lightBlue">I'm a Web Developer</span>
              </h2>
              <h3 className="text-2xl font-medium text-dark py-2">
                My name is John Doe
              </h3>
              <p className="mb-1">
                I am a professinal web developer who many services at a time.So
                Tech innovation is the Best Web Design Company in Bangladesh
                located in the capital city Dhaka.Creative Tech Park is a
                one-stop solution for the absolute requirements in the web
                industry that provide the best software development and website
                application development service.
              </p>
              <div className="pb-2 pt-3 text-left">
                <div className="flex items-center">
                  {icons.map((icon) => (
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-lightBlue hover:bg-blue-800 hover:shadow-lg hover:shadow-gray-400 m-2 text-white"
                      key={icon.id}
                    >
                      <span className="text-xl ">
                        <icon.Icon />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="text-lightBlue bg-white border-2 border-lightBlue hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                DownLoad Cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
