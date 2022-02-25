import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["header", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
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
