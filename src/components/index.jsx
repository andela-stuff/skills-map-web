import React from 'react';
import Header from './Header';
import SideNav from './Sidenav';
import ContentMain from './ContentMain';
import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import '../assets/css/styles.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <SideNav />
        <ContentMain />
      </div>
    );
  }
}

export default Home;
