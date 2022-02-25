import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import images from "../../constant/images";
import { Wrapper } from "../../wrapper";
const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <header id="header" className="header">
      <motion.div
        className="header__info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="header__info__badge">
          <div className="header__info__badge-cmp">
            <span>👋</span>
            <div className="header__info__badge-cmp__container">
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">John</h1>
            </div>
          </div>
          <div className="header__info__badge__tag">
            <p className="p-text">web developer </p>
            <p className="p-text"> freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="header__profile"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img
          src={images.johnsdanlami}
          alt=""
          className="header__profile-image"
        />
        <motion.img
          src={images.circle}
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header__profile-image-overlay"
        />
      </motion.div>
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="header__circles"
      >
        {[images.flutter, images.redux, images.sass].map((img, id) => (
          <div className="header__circles__cmp" key={id}>
            <img src={img} alt="cicle" className="header__circles__cmp-img" />
          </div>
        ))}
      </motion.div>
    </header>
  );
};

export default Wrapper(Header, "header");
