import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="mt-10">
      <div className="footer p-10 py-28 bg-[#512B58] text-lg text-white">
        <aside>
          <img className="w-28" src="/titleLogo.jpg" alt="" />
          <br />

          <p className="w-2/3">
            TechTrove Blog Web Corp
            <br />
            <br />
            Providing all the latest tech news and updates to all the people
            freely.
          </p>
        </aside>
        <nav className="space-y-5 mr-0 md:mr-10">
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover flex items-center gap-3">
            <BsFillTelephoneFill /> +999-111-0000
          </a>
          <a className="link link-hover flex items-center gap-3">
            <MdEmail className="text-2xl" /> Maestria@007.com
          </a>
          <a className="link link-hover flex items-center gap-5">
            <FaFacebook className="text-3xl" />{" "}
            <FaSquareInstagram className="text-3xl" />{" "}
            <FaLinkedinIn className="text-3xl" />{" "}
            <FaSquareTwitter className="text-3xl" />
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title">Services</h6>
          <p>- Tech News</p>
          <p>- Tech Poducts Review</p>
          <p>- Latest Tech Articles</p>
          <p>- One to one service</p>
        </nav>
      </div>
      <div className="footer items-center px-4 py-10 bg-[#2A7886] text-neutral-content ">
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-xl">Privacy Policy</p>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
