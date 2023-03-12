import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "../about/About";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonials/Testimonial";
import Contact from "../contact/Contact";

const Home = () => {
  //react slick slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <>
      <section className="slider_section">
        <div className="carousel_sec clearfix">
          <Slider {...settings}>
            <div className="slider_1 sl-h">
              <div className="slider-content">
                <div className="content_wraper">
                  <div className="flex justify-center">
                    <h2 className=" text-4xl md:text-5xl font-medium text-white slider_header lg:max-w-4xl max-w-xl pb-4">
                      Flexible and intuitive services{" "}
                    </h2>
                  </div>
                  <p className="text-gray-200 text-base my-2.5 lg:max-w-3xl max-w-xl">
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat.
                  </p>

                  <Link to="/blog">
                    <button
                      type="button"
                      className="text-white bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slider_2 sl-h">
              <div className="slider-content">
                <div className="content_wraper">
                  <div className="flex justify-center">
                    <h2 className=" text-4xl md:text-5xl font-medium text-white slider_header lg:max-w-4xl max-w-xl pb-4">
                      Flexible and intuitive services{" "}
                    </h2>
                  </div>

                  <p className="text-gray-200 text-base my-2.5 lg:max-w-3xl max-w-xl">
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat.
                  </p>
                  <Link to="/blog">
                    <button
                      type="button"
                      className="text-white bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slider_3 sl-h">
              <div className="slider-content">
                <div className="content_wraper">
                  <div className="flex justify-center">
                    <h2 className=" text-4xl md:text-5xl font-medium text-white slider_header lg:max-w-4xl max-w-xl pb-4">
                      Flexible and intuitive services{" "}
                    </h2>
                  </div>

                  <p className="text-gray-200 text-base my-2.5 lg:max-w-3xl max-w-xl">
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat.
                  </p>
                  <Link to="/blog">
                    <button
                      type="button"
                      className="text-white bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mt-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* about section */}
      <About />

      {/* services section */}
      <Services />
      {/* portfolio section */}
      <Portfolio />
      {/* testimonial section */}
      <Testimonial />

      {/* contact section */}
      <Contact />
    </>
  );
};

export default Home;
