import React from "react";
import { createContainer } from "meteor/react-meteor-data";

import {
  INCREMENT_COUNTER,
} from "/imports/ui/actions";

export default createContainer(({ store }) => {
  const {
    counter,
  } = store.getState();

  // Anything we return from this function will be *added* to props.
  return {
    buttonOnClick: (event) => {
      event.preventDefault();

      store.dispatch({
        type: INCREMENT_COUNTER.type,
      });
    },
    counter,
  };
}, ({
  counter,
  buttonOnClick,
}) => (
  <div>
    <button onClick={buttonOnClick}>Click Me</button>
    <p>You&apos;ve pressed the button {counter} times.</p>
  </div>
));
