import { createContainer } from "meteor/react-meteor-data";

import {
  COMPONENT__INFO_INIT,
  COMPONENT__INFO_CLEANUP,
  COMPONENT__INFO_NEWLINK_SUBMIT,
  COMPONENT__INFO_NEWLINK_CHANGE_TITLE,
  COMPONENT__INFO_NEWLINK_CHANGE_URL,
  COMPONENT__INFO_NEWLINK_RESET,
} from "/imports/ui/actions";
import Component from "./component";

export default createContainer(({ store }) => {
  const {
    linksCursor,
    linksSubscription,
    addingNewLink,
    newLinkTitle,
    newLinkUrl,
  } = store.getState();

  const loading = !(linksSubscription && linksSubscription.ready());
  const links = linksCursor ? linksCursor.fetch() : [];

  // Anything we return from this function will be *added* to props.
  return {
    componentDidMount: () => store.dispatch({
      type: COMPONENT__INFO_INIT.type,
    }),
    componentWillUnmount: () => store.dispatch({
      type: COMPONENT__INFO_CLEANUP.type,
    }),

    loading,
    formOnSubmit: (event) => {
      event.preventDefault();

      const target = event.target;

      store.dispatch({
        type: COMPONENT__INFO_NEWLINK_SUBMIT.type,
        title: target.title.value,
        url: target.url.value,
        callback: (error/*, result*/) => {
          if (error) {
            alert(error.error);
          } else {
            store.dispatch({
              type: COMPONENT__INFO_NEWLINK_RESET.type,
            });
          }
        },
      });
    },
    links,
    addingNewLink,
    newLinkTitle,
    newLinkUrl,
    newLinkTitleOnChange: (event) => {
      event.preventDefault();

      store.dispatch({
        type: COMPONENT__INFO_NEWLINK_CHANGE_TITLE.type,
        value: event.target.value,
      });
    },
    newLinkUrlOnChange: (event) => {
      event.preventDefault();

      store.dispatch({
        type: COMPONENT__INFO_NEWLINK_CHANGE_URL.type,
        value: event.target.value,
      });
    },
  };
}, Component);
