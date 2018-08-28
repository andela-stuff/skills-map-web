import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DropDownMenu from "../Menu/DropDownMenu";
import { slugTitle } from "../../utils/constants";
import { toggleTalentFramework } from "../../actions/talentFramework.action";

const talentFrameworks = [
  { id: 1, name: "Skills" },
  { id: 2, name: "LMS" },
  { id: 3, name: "Dev Attributes" },
  { id: 4, name: "Skills Session" }
];

class Header extends React.PureComponent {
  render() {
    const list = [
      "hello@example.com",
      "info@example.com",
      <span>
        <i className="material-icons">add</i>
        Add another account...
      </span>
    ];

    return (
      <header className="demo-header mdl-layout__header mdl-color-text--white-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Skills Mapping</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label
              className="mdl-button mdl-js-button mdl-button--icon"
              htmlFor="search"
            >
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search" />
              <label className="mdl-textfield__label" htmlFor="search">
                Enter your query...
              </label>
            </div>
          </div>
          <DropDownMenu
            actionButton={
              <button
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
                id="hdrbtn"
              >
                <i className="material-icons">more_vert</i>
              </button>
            }
            htmlFor="hdrbtn"
            listItems={list}
          />
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          {talentFrameworks.map((item, index) => {
            return (
              <a
                key={index}
                href={`#${slugTitle(item.name)}`}
                className="mdl-layout__tab"
                onClick={() => this.props.toggleTalentFramework(item)}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleTalentFramework }, dispatch);
};

export default connect(null, mapDispatchToProps)(Header);
