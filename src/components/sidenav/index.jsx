import React from 'react';
import DropDownMenu from '../Menu/DropDownMenu';
import andelaLogo from '../../../public/images/logo.andela.png';
import styles from './style.scss';

class SideNav extends React.PureComponent {
  render() {
    const list = [
      'hello@example.com',
      'info@example.com',
      <span><i className="material-icons">add</i>Add another account...</span>
    ];

    return (
      <div className="demo-drawer mdl-layout__drawer">
        <header className="demo-drawer-header">
          <a href="#">
            <img src={andelaLogo} className="demo-logo" />
            <span className="mdl-color-text--white">Andela</span>
          </a>
        </header>
        <nav className="demo-navigation mdl-navigation">
          <a className="mdl-navigation__link" href="#"><i className="mdl-color-text--indigo material-icons" role="presentation">insert_chart</i>Overview</a>
          <a className="mdl-navigation__link" href="#"><i className="mdl-color-text--indigo material-icons" role="presentation">table_chart</i>Detail</a>
          <div className="mdl-layout-spacer" />
          <br />
        </nav>
      </div>
    );
  }
}

export default SideNav;
