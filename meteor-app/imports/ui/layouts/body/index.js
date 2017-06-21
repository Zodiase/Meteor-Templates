import React from "react";
import { createContainer } from "meteor/react-meteor-data";

export default createContainer(() => {
  // Anything we return from this function will be *added* to props.
  return {};
}, ({
  main,
}) => (
  <div>{main}</div>
));
