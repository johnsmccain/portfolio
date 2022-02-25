import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/Johnsdanlami?t=O339Ucqk0bbQZYxxhNDRBA&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsTwitter />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/john-danlami-b5a745154"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
      </div>

      <div>
        <a
          href="https://github.com/johnsmccain"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsGithub />{" "}
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
