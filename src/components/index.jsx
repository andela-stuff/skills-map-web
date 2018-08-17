import React from 'react';
import Header from './header';
import SideNav from './sidenav';
import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import '../assets/css/styles.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <SideNav />
      </div>
    );
  }
}

export default Home;
