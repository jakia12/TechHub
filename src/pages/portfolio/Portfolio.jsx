import React from "react";
import { portfolios } from "../../PlaceholderData/Placeholder";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Portfolio = () => {
  return (
    <section className="portfolio_section py-14 lg:py-20 bg-white">
      <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
        <div className="text-center pb-6 relative">
          <h2 className="text-4xl font-semibold text-dark pt-1 pb-3">
            My Portfolio
          </h2>
          <div className="bg-lightBlue w-24 h-1  m-0 mx-auto mb-10"></div>
        </div>
        <div className="md:flex items-center justify-center flex-wrap">
          {portfolios.map((portfolio) => (
            <div className="w-full lg:w-4/12  mx-auto sm:mx-0">
              <div className=" m-4 content">
                <div className="content_overlay"></div>
                <img
                  src={portfolio.img}
                  className="w-full rounded content_image"
                  alt=""
                />
                <div className="content_details">
                  <button className="border rounded-md border-white py-2 5 px-7 text-sm text-white hover:bg-blue-500 hover:border-blue-500">
                    {portfolio.btnText}
                  </button>
                  <PhotoProvider>
                    <PhotoView
                      src={portfolio.img ? portfolio.img : "No image available"}
                    >
                      <div className="flex justify-center items-center my-5">
                        <span className="text-center cursor-pointer text-white text-3xl">
                          {<portfolio.Icon />}
                        </span>
                      </div>
                    </PhotoView>
                  </PhotoProvider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
