import React from 'react';
import { connect } from 'react-redux';
import Card from '../ContentMain/Card';
import SideMenuPanel from '../Menu/SideMenuPanel';
import { getRandomInt } from '../../utils/constants';
import LoadingPlaceholder from './LoadingPlaceholder';

export class ContentMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      showTalentFramework: false,
      isPanelOpened: false,
      details: {
        name: ''
      },
    }

    this.openSideMenuPanel = this.openSideMenuPanel.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      showTalentFramework: newProps.showTalent,
    });
  }

  openSideMenuPanel(open, details = { name: '' }) {
    this.setState({
      isPanelOpened: open,
      details
    });
  }

  renderTalentFramework() {
    console.log(this.state.showTalentFramework);
    if(this.state.showTalentFramework) {
      return (
        <ul className="demo-list-item mdl-list">
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bryan Cranston
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Aaron Paul
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              Bob Odenkirk
            </span>
          </li>
        </ul>
      );
    }
    return (<LoadingPlaceholder />);
  }

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="framework-list">
            {this.renderTalentFramework()}
          </div>
        </div>
        <SideMenuPanel
          open={this.state.isPanelOpened}
          openSideMenuPanel={this.openSideMenuPanel}
          details={this.state.details}
        />
      </main>
    );
  }
}

const mapStateToProps = ({
  talentFrameworkReducer: { framework, showTalent },
}) => ({
  framework,
  showTalent
});

export default connect(mapStateToProps)(ContentMain);
