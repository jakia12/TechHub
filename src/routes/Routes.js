import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Notfound from "../pages/notfound/Notfound";
import Portfolio from "../pages/portfolio/Portfolio";
import Services from "../pages/services/Services";
import Testimonial from "../pages/testimonials/Testimonial";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </>
  )
);
