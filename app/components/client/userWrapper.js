import React, {Component} from 'react';

class UserWrapper extends Component {
  select = () => {

  }

  // {
  //   /*data-bind={`
  //     event: {
  //       contextmenu: openContextMenu
  //     }`}
  //     */
  //   }

  render() {
    return (
      <div className="user-wrapper">
        <div className="user-tree" />
        <div 
          className={`user ${this.props.thisUser ? 'thisClient' : ''} ${this.props.selected ? 'selected' : ''}`}
          onClick={this.select} 
        >
          <div className="user-status" data-bind="attr: { title: state }">
            <img className="user-comment" data-bind="visible: comment"
                alt="comment" src="/svg/comment.svg"/>
            <img className="user-server-mute" data-bind="visible: mute"
                alt="server mute" src="/svg/muted_server.svg"/>
            <img className="user-suppress-mute" data-bind="visible: suppress"
                alt="suppressed" src="/svg/muted_suppressed.svg"/>
            <img className="user-self-mute" data-bind="visible: selfMute" 
                alt="self mute" src="/svg/muted_self.svg"/>
            <img className="user-server-deaf" data-bind="visible: deaf"
                alt="server deaf" src="/svg/deafened_server.svg"/>
            <img className="user-self-deaf" data-bind="visible: selfDeaf"
                alt="self deaf" src="/svg/deafened_self.svg"/>
            <img className="user-authenticated" data-bind="visible: uid"
                alt="authenticated" src="/svg/authenticated.svg"/>
          </div>
          {
            this.props.user.comment && (
              <div className="user-comment tooltip" data-bind="html: comment">{this.props.user.comment}</div>
            )
          }
  
          {
            showAvatar ? (
              <img className="user-avatar" alt="avatar"
              data-bind="attr: { src: texture },
                        css: { 'user-avatar-talk-off': talking() == 'off',
                                'user-avatar-talk-on': talking() == 'on',
                                'user-avatar-talk-whisper': talking() == 'whisper',
                                'user-avatar-talk-shout': talking() == 'shout' }"/>
            ) : (
              <div>
                <img 
                  className={`user-talk user-talk-${this.props.user.talking}`}
                  alt={this.props.user.talking}
                  src={`../svg/talking_${this.props.user.talking}.svg`}/>
                <div className="user-name" data-bind="text: name">{this.props.user.name}</div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

