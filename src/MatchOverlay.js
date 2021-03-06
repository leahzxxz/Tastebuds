import React, { Component } from 'react'
import jerry from './img/jerry.png'
import philip from './img/philip.png'

export default class MatchOverlay extends Component {
  render() {
    return (
      <div className="matchoverlay">
        <div className="matchoverlay-content">
          <h1 className="match-title">It's a match!  <i className="fa fa-free-code-camp" aria-hidden="true" /></h1>
          {this.props.person === 'jerry' && <img src={jerry} className="jerry-profile-pic" alt="jerry-profile-pic" />}
          {this.props.person === 'philip' && <img src={philip} className="philip-profile-pic" alt="philip-profile-pic" />}
          <div className="match-buttons">
            <button className="button is-info is-medium">Message</button>
            <button className="button is-link is-medium" onClick={() => this.props.keepSwiping()}>Keep Swiping</button>
          </div>
        </div>
      </div>
    )
  }
}
