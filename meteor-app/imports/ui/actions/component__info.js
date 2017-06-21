import PropTypes from "prop-types";

export const COMPONENT__INFO_INIT = {
  type: "COMPONENT__INFO_INIT",
  payloadSchema: {},
};

export const COMPONENT__INFO_CLEANUP = {
  type: "COMPONENT__INFO_CLEANUP",
  payloadSchema: {},
};

export const COMPONENT__INFO_NEWLINK_SUBMIT = {
  type: "COMPONENT__INFO_NEWLINK_SUBMIT",
  payloadSchema: {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  },
};

export const COMPONENT__INFO_NEWLINK_CHANGE_TITLE = {
  type: "COMPONENT__INFO_NEWLINK_CHANGE_TITLE",
  payloadSchema: {
    value: PropTypes.string.isRequired,
  },
};

export const COMPONENT__INFO_NEWLINK_CHANGE_URL = {
  type: "COMPONENT__INFO_NEWLINK_CHANGE_URL",
  payloadSchema: {
    value: PropTypes.string.isRequired,
  },
};

export const COMPONENT__INFO_NEWLINK_RESET = {
  type: "COMPONENT__INFO_NEWLINK_RESET",
  payloadSchema: {},
};
