import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: 'horizontal',
      showConnect: false,
      showInfo: false,
      showSettings: false,
      selfMute: false,
      selfDeaf: false,
    }
  }

  toggleOrientation = () => {
    this.setState({
      orientation: this.state.orientation === 'horizontal' ? 'vertical' : 'horizontal',
    })
  }

  showConnect = () => {
    if (!this.state.showConnect) {
      this.setState({
        showConnect: true
      })
    }
  }

  showInfo = () => {
    if (!this.state.showInfo) {
      this.setState({
        showInfo: true
      })
    }
  }

  showSettings = () => {
    if (!this.state.showSettings) {
      this.setState({
        showSettings: true
      })
    }
  }

  closeInfo = () => {}

  closeConnect = () => {}

  closeSettings = () => {}

  onConnectError = (err) => {}

  record = () => {}

  openRepository = () => {}

  toggleMute = () => {
    if (this.state.muted) {
      // Request unmute
    }else{
      // Request mute
    }
  }

  toggleDeaf = () => {
    if (this.state.deafened) {
      // Request undeafen
    }else{
      // Request deafen
    }
  }

  clearConnectError = () => {}  

  render() {
    return (
      <div className='toolbarContainer'>
        <div className={`toolbar-${this.state.orientation}`}>
          <img 
            className={`handle-${this.state.orientation}`}
            src={`../svg/handle_${this.state.orientation}.svg`}
            onClick={this.toggleOrientation}
          />
          <img 
            className="tb-connect" 
            data-bind="visible: !connectDialog.joinOnly()" // ???
            rel="connect" // ???
            src="../svg/connect.svg"
            onClick={this.showConnect} />
          <img 
            className="tb-information" 
            rel="information" 
            src="../svg/information.svg"
            data-bind="css: { disabled: !thisUser() }"
            style={{disabled: !this.props.user}}
            onClick={this.showInfo} />
            
          <div className="divider"/>
          <img 
            className={this.props.selfMute ? "tb-unmute tb-active" : "tb-mute" }
            rel="mute" 
            onClick={this.mute}
            src={this.state.muted ? "../svg/unmute.svg" : "../svg/mute.svg"} />
          <img 
            className={this.props.selfDeaf ? "tb-undeaf tb-active" : "tb-deaf" }
            onClick={this.toggleDeaf}
            rel="deaf" 
            src={this.state.deafened ? "../svg/undeafen.svg" : "../svg/deafen.svg"} />
          <img 
            className="tb-record" 
            onClick={this.record}
            rel="record" 
            src="../svg/record.svg"/>
          <div className="divider"/>
          <img 
            className="tb-comment" 
            onClick={this.showComment}
            rel="comment" 
            src="../svg/comment.svg"/>
          <div className="divider"/>
          <img 
            className="tb-settings" 
            onClick={this.showSettings}
            rel="settings" 
            src="../svg/settings.svg"/>
          <div className="divider"/>
          <img 
            className="tb-sourcecode" 
            onClick={this.openRepository}
            rel="Source Code" 
            src="../svg/github.svg"/>
        </div>
        <div className='dialogContainer'>
          <ConnectDialog
            open={this.state.showConnect}
            onError={this.onConnectError}
            close={this.closeConnect}
          />
          <ConnectJoinDialog />
          <ConnectErrorDialog
            open={!!this.state.connectError}
            error={this.state.connectError}
            close={this.clearConnectError}
          />
          <ConnectionInfo
            open={this.state.showInfo}
            close={this.closeInfo}
          />
          <SettingsDialog
            open={this.state.showSettings}
            close={this.closeSettings}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.connection.user,
    selfMute : state.connection.selfMute,
    selfDeaf: state.connection.selfDeaf,
  }
}


export default connect(mapStateToProps)(Toolbar);