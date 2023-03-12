import { RiFacebookLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

// testmonial image
import Testi1 from "../images/testimonial/ts1.png";
import Testi2 from "../images/testimonial/ts2.png";
import Testi3 from "../images/testimonial/ts3.png";
import Testi4 from "../images/testimonial/ts4.png";
// portfolio images
import Bl1 from "../images/portfolio/bl1.jpg";
import Bl2 from "../images/portfolio/bl2.jpg";
import Bl3 from "../images/portfolio/bl3.jpg";
import Bl4 from "../images/portfolio/bl4.jpg";
import Bl5 from "../images/portfolio/bl5.jpg";
import Bl6 from "../images/portfolio/bl6.jpg";
import { AiOutlineLink } from "react-icons/ai";
import graphicDesign from "../images/services/graphic-design.jpg";
import SEO from "../images/services/seo.jpg";
import webDev from "../images/services/web-dev.jpg";
import appDev from "../images/services/app-dev.jpg";
import webDesign from "../images/services/web-desgin.jpg";
import uiUx from "../images/services/ux2.jpg";

// services image

export const services = [
  {
    id: 1,
    title: "Graphic Design",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: graphicDesign,
    price: 20,
  },
  {
    id: 2,
    title: "Seo",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: SEO,
    price: 30,
  },
  {
    id: 3,
    title: "Web Development",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: webDev,
    price: 35,
  },
  {
    id: 4,
    title: "App Development",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: appDev,
    price: 35,
  },

  {
    id: 5,
    title: "Web Design",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: webDesign,
    price: 42,
  },
  {
    id: 3,
    title: "UI/UX",
    subTitle:
      "Tech Innovation offers best Graphic design service towards it’s client. When we are designing websit",
    image: uiUx,
    price: 35,
  },
];

export const icons = [
  { id: 1, Icon: RiFacebookLine },
  { id: 2, Icon: RiInstagramLine },
  { id: 3, Icon: RiTwitterLine },
  { id: 4, Icon: RiLinkedinLine },
];

//testmonial data
export const testimonials = [
  {
    _id: 1,
    client: {
      image: Testi1,
      name: "John Doe",
      location: "California",
    },
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    _id: 2,
    client: {
      image: Testi2,
      name: "Jessica Bales",
      location: "New York",
    },
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    _id: 3,
    client: {
      image: Testi3,
      name: "Richard Micheal",
      location: "Texas",
    },
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    _id: 4,
    client: {
      image: Testi4,
      name: "Karry Doe",
      location: "Seattle",
    },
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
];

//portfolio gallery

export const portfolios = [
  {
    id: 1,
    img: Bl1,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
  {
    id: 2,
    img: Bl2,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
  {
    id: 3,
    img: Bl3,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
  {
    id: 4,
    img: Bl4,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
  {
    id: 5,
    img: Bl5,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
  {
    id: 6,
    img: Bl6,
    btnText: "Read More",
    Icon: AiOutlineLink,
  },
];
