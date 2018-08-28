import React from 'react';
import classNames from 'class-names';
import { getRandomInt } from '../../utils/constants';
import './style.scss';

export default class Card extends React.PureComponent{
  render() {
    const { details, color, openSideMenuPanel } = this.props;
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone mdl-cell--6-col-tablet">
        <div className="demo-card-square mdl-card mdl-shadow--2dp">
          <div className={classNames("mdl-card__title", "mdl-card--expand", color)}>
            <h2 className="mdl-card__title-text">{details.name}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a
              className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
              onClick={() => openSideMenuPanel(true, details)}
            >
              View {details.name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}