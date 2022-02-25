import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./About.scss";

import { Wrapper } from "../../wrapper";

// const about = [
//   {
//     title: "web developer",
//     description: "i build things that live on the web",
//     image: images.about01,
//   },
//   {
//     title: "frontend developer",
//     description: "i build things that live on the web",
//     image: images.about02,
//   },
//   {
//     title: "backend developer",
//     description: "i build things that live on the web",
//     image: images.about03,
//   },
//   {
//     title: "full-stack developer",
//     description: "i build things that live on the web",
//     image: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
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
        {abouts.map((item, id) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about__container__card"
            key={item.title + id}
          >
            {/* {console.log(item.imageUrl)} */}
            <img
              src={urlFor(item.imageUrl)}
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

export default Wrapper(About, "about");
