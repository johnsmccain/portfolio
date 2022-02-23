import "./Navbar.scss";
import images from "../../constant/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        jo<span className="logo">hn </span>
      </h1>
      {/* <img src={images.logo} alt="" className="navImg" /> */}

      <ul className="navbar__list list">
        {["home", "about", "work", "skills", "contact"].map((link, index) => (
          <li className="navbar__list-item" key={index}>
            <div></div>
            <a href={`#${link}`} className="navbar__list-item-link link">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar__mobile">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="btn" />
        {toggle && (
          <motion.div
            className="navbar__mobile__container"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.94, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} className="btn" />
            <ul className="navbar__mobile__container__list list">
              {["home", "about", "work", "skills", "contact"].map(
                (link, index) => (
                  <li
                    className="navbar__mobile__container__list-item"
                    key={index}
                  >
                    <a
                      href={`#${link}`}
                      onClick={() => setToggle(false)}
                      className="navbar__mobile__container__list-item-link link"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
