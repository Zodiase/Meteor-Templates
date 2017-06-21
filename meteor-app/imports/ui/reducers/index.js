import { checkPropTypes } from "prop-types";

import { initialState } from "../consts";
import * as actions from "../actions";
import * as reducers from "./reducers";

export default (state = initialState, action) => {
  let nextState = state;

  if (action.type in reducers) {
    checkPropTypes(actions[action.type].payloadSchema, action, "action", `reducer:${action.type}`);

    nextState = reducers[action.type](state, action);
  }

  console.log(`redux.action.${action.type}`, {
    state,
    action,
    nextState,
  });

  return nextState;
};
