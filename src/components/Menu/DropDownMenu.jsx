import React from 'react';

class DropDownMenu extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {this.props.actionButton}
        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor={this.props.htmlFor}>
          {
            this.props.listItems.map((item, index) => {
              return (
                <li className="mdl-menu__item" key={`${index}-${item}`}>{item}</li>
              );
            })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default DropDownMenu;
