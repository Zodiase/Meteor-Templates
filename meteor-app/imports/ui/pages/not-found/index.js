import React from "react";
import { createContainer } from "meteor/react-meteor-data";

export default createContainer(() => {
  // Anything we return from this function will be *added* to props.
  return {};
}, () => (
  <div
    id="not-found"
  >
    <div
      className="not-found-image"
    />
    <div
      className="not-found-title"
    >
      <h1>Sorry, that page doesn&apos;t exist</h1>
      <a
        href="/"
        className="gotohomepage"
      >Go to home</a>
    </div>
  </div>
));
