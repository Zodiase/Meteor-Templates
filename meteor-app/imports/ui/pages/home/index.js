import React from "react";
import { createContainer } from "meteor/react-meteor-data";

import Hello from "/imports/ui/components/hello";
import Info from "/imports/ui/components/info";

export default createContainer(() => {
  // Anything we return from this function will be *added* to props.
  return {};
}, ({
  store,
}) => (
  <div>
    <Hello store={store} />
    <Info store={store} />
  </div>
));
