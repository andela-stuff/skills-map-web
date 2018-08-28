import React from 'react';
import ReactTooltip from 'react-tooltip';
import DropDownMenu from '../Menu/DropDownMenu';
import andelaLogo from '../../../public/images/logo.andela.png';
import styles from './style.scss';

const mockOverview = [
  { id: 1, title: 'Overview', icon: 'insert_chart' },
  { id: 2, title: 'Detailed', icon: 'table_chart' },
]

class SideNav extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="demo-drawer mdl-layout__drawer">
          <header className="demo-drawer-header">
            <a href="#">
              <img src={andelaLogo} className="demo-logo" />
              <span>Andela</span>
            </a>
          </header>
          <nav className="demo-navigation mdl-navigation">
            {
              mockOverview.map((item, index) => {
                return (
                  <a key={index} data-tip={item.title} className="mdl-navigation__link" href="#">
                    <i className="mdl-color-text--indigo material-icons" role="presentation">{item.icon}</i>
                    <span>{item.title}</span>
                  </a>
                );
              })
            }
            <div className="mdl-layout-spacer" />
            <br />
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
