import React from "react";

const NavigationDots = () => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${link}`}
            key={index}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
            className="app__navigation-dot"
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
