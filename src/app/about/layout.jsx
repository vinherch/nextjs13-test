import React from "react";

/* Each page can have it's own layout if neccessary. It will be inherited from subroutes.
Otherwise the root layout will be choosen */

export const metadata = {
  title: "About",
  description: "About ...",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>Test About Layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
