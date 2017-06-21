import React from "react";
import PropTypes from "prop-types";

export default class Info extends React.Component {
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired,
    componentWillUnmount: PropTypes.func.isRequired,

    formOnSubmit: PropTypes.func.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    addingNewLink: PropTypes.bool.isRequired,
    newLinkTitle: PropTypes.string.isRequired,
    newLinkUrl: PropTypes.string.isRequired,
    newLinkTitleOnChange: PropTypes.func.isRequired,
    newLinkUrlOnChange: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const {
      componentDidMount,
    } = this.props;

    componentDidMount();
  }

  componentWillUnmount () {
    const {
      componentWillUnmount,
    } = this.props;

    componentWillUnmount();
  }

  render () {
    const {
      formOnSubmit,
      links,
      addingNewLink,
      newLinkTitle,
      newLinkUrl,
      newLinkTitleOnChange,
      newLinkUrlOnChange,
    } = this.props;

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>
          <li>
            <form
              className="info-link-add"
              onSubmit={formOnSubmit}
            >
              <fieldset
                className="fieldset--nostyle"
                disabled={addingNewLink}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  value={newLinkTitle}
                  onChange={newLinkTitleOnChange}
                />
                <input
                  type="url"
                  name="url"
                  placeholder="Url"
                  required
                  value={newLinkUrl}
                  onChange={newLinkUrlOnChange}
                />
                <input
                  type="submit"
                  name="submit"
                  value="Add new link"
                />
              </fieldset>
            </form>
          </li>
          {links.map(({ _id, url, title }) => (
            <li
              key={`link-item_${_id}`}
            >
              <a
                href={url}
                target="_blank"
              >{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
