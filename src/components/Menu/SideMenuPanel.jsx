import React from 'react';
import './style.scss';

export default class SideMenuPanel extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      panelWrapper: {
        style: {}
      },
    }
  }

  openPanel() {
    const { panelWrapper } = this.state;
    if(this.props.open) {
      return panelWrapper.style.marginRight = 0;
    }
    return panelWrapper.style.marginRight = '-1000px';
  }

  componentDidMount() {
    this.state.panelWrapper = document.querySelector('.panel-wrapper');
  }

  render() {
    this.openPanel();
    const { details, openSideMenuPanel } = this.props;
    return (
      <div className="panel-wrapper">
        <div className="panel-header">
          <h4 className="panel-header--title mdl-color-text--black">{details.name}</h4>
          <button
            className="panel--close mdl-button mdl-js-button mdl-button--icon mdl-color-text--black"
            onClick={() => openSideMenuPanel(false)}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>
    );
  }
}
