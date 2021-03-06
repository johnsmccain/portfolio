import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../../client";
import "./About.scss";
import images from "../../constant/images";
// import { Wrapper } from "../../wrapper";

const about = [
  {
    title: "web developer",
    description: "i build things that live on the web",
    image: images.about01,
  },
  {
    title: "frontend developer",
    description: "i build things that live on the web",
    image: images.about02,
  },
  {
    title: "backend developer",
    description: "i build things that live on the web",
    image: images.about03,
  },
  {
    title: "full-stack developer",
    description: "i build things that live on the web",
    image: images.about04,
  },
];
const About = () => {
  //   const [about, setAbout] = useState([]);

  //   useEffect(() => {
  //     const query = '*[_type == "about"]';
  //     client.fetch(query).then((date) => setAbout(data));
  // }, []);
  return (
    <div className="about">
      <h2 className="about-heading">
        I know that{" "}
        <span>
          Good Apps <br />
        </span>{" "}
        means <span>Good Business</span>
      </h2>
      <div className="about__container">
        {about.map((item, id) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about__container__card"
            key={item.title + id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="about__container__card-img"
            />
            <h2 className="about__container__card-title bold-text">
              {item.title}
            </h2>
            <p className="about__container__card-description p-text">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
