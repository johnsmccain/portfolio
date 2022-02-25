import React from "react";
import { SocialMedia, NavigationDots } from "../components";
const Wrapper = (Components, idNames, classNames) =>
  function HOC() {
    return (
      <div id={idNames} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Components />
          <div className="copyright">
            <p className="p-text">@2022 John</p>
            <p className="p-text">all right reserve</p>
          </div>
        </div>
        <NavigationDots active={idNames} />
      </div>
    );
  };

export default Wrapper;
