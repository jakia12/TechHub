import React from "react";
import SingleCard from "../../components/singleCard/SingleCard";
import { services } from "../../PlaceholderData/Placeholder";

const Services = () => {
  return (
    <section className="services_section bg-gray-50 py-14 lg:py-20">
      <div className="container mx-auto w-full lg:max-w-6xl px-4 lg:px-6">
        <div className="text-center relative">
          <h2 className="text-4xl font-semibold text-dark pt-1 pb-3">
            My Services
          </h2>
          <div className="bg-lightBlue w-24 h-1  m-0 mx-auto mb-10"></div>
        </div>

        <div className="md:flex items-center flex-wrap">
          {services.map((service) => (
            <SingleCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center py-8">
          <button className="inline-flex items-center py-3 px-9 text-sm font-medium text-center text-white bg-lightBlue rounded-lg hover:bg-deepBlue focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 my-2">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
