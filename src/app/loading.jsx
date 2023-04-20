import React from "react";

/* LoadingPage will appear automaticly for server components (file name has to be loading.js/jsx) */
const LoadingPage = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingPage;
