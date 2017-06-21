import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";
import { createStore } from "meteor/zodiase:reactive-redux-store";

// Import reducers for the redux store.
import reducers from "/imports/ui/reducers";

// Import needed templates.
import AppBody from "/imports/ui/layouts/body";
import HomePage from "/imports/ui/pages/home";
import NotFoundPage from "/imports/ui/pages/not-found";

const store = createStore(reducers);
//! Attach to window for debugging.
window.store = store;

FlowRouter.route("/", {
  name: "Home",
  action () {
    mount(AppBody, {
      store,
      main: <HomePage store={store} />,
    });
  },
});

FlowRouter.notFound = {
  action () {
    mount(AppBody, {
      store,
      main: <NotFoundPage store={store} />,
    });
  },
};
