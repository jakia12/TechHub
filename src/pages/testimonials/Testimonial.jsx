import React from "react";
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider.jsx/TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="portfolio_section py-14 lg:py-20 bg-gray-50">
      <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
        <div className="text-center pb-6 relative">
          <h2 className="text-4xl font-semibold text-dark pt-1 pb-3">
            My Testimonials
          </h2>
          <div className="bg-lightBlue w-24 h-1  m-0 mx-auto mb-10"></div>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
