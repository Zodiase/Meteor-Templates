import { Meteor } from "meteor/meteor";

import { Links } from "/imports/api/links";

export const COMPONENT__INFO_INIT = (state/*, action*/) => {
  const {
    linksSubscription,
  } = state;

  if (linksSubscription) {
    linksSubscription.stop();
  }

  return {
    ...state,
    linksCursor: Links.find({}),
    linksSubscription: Meteor.subscribe("links.all"),
  };
};

export const COMPONENT__INFO_CLEANUP = (state/*, action*/) => {
  const {
    linksSubscription,
  } = state;

  if (linksSubscription) {
    linksSubscription.stop();
  }

  return {
    ...state,
    linksCursor: null,
    linksSubscription: null,
  };
};

export const COMPONENT__INFO_NEWLINK_SUBMIT = (state, action) => {
  const {
    title,
    url,
    callback,
  } = action;

  Meteor.call("links.insert", title, url, callback);

  return {
    ...state,
    addingNewLink: true,
  };
};

export const COMPONENT__INFO_NEWLINK_CHANGE_TITLE = (state, action) => ({
  ...state,
  newLinkTitle: action.value,
});

export const COMPONENT__INFO_NEWLINK_CHANGE_URL = (state, action) => ({
  ...state,
  newLinkUrl: action.value,
});

export const COMPONENT__INFO_NEWLINK_RESET = (state/*, action*/) => ({
  ...state,
  addingNewLink: false,
  newLinkTitle: "",
  newLinkUrl: "",
});
