import React, {Component} from 'react';
import { connect } from 'react-redux';

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <div className="log">
          {
            this.props.logs.map((log,i) => {
              return (
                <div className="log-entry" key={i}>
                  <span className="log-timestamp" data-bind="text: $root.getTimeString()">{log.date}</span>
                  <span className='log-value'>{log.value}</span>
                </div>
              )
            })
          }
        </div>
        <form data-bind="submit: submitMessageBox">
          <input 
            id="message-box" 
            type="text" 
            data-bind="attr: { placeholder: messageBoxHint }, textInput: messageBox" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: state.connection.logs
  }
}

export default connect(mapStateToProps)(Chat);

// <script type="text/html" id="log-generic">
// <span data-bind="text: value"></span>
// </script>
// <script type="text/html" id="log-welcome-message">
// Welcome message: <span data-bind="html: message"></span>
// </script>
// <script type="text/html" id="log-chat-message">
// <span data-bind="visible: channel">
//   (Channel)
// </span>
// <span data-bind="template: { name: 'user-tag', data: user }"></span>:
// <span class="message-content" data-bind="html: message"></span>
// </script>
// <script type="text/html" id="log-chat-message-self">
// To
// <span data-bind="template: { if: $data.channel, name: 'channel-tag', data: $data.channel }">
// </span><span data-bind="template: { if: $data.user, name: 'user-tag', data: $data.user }">
// </span>:
// <span class="message-content" data-bind="html: message"></span>
// </script>
// <script type="text/html" id="log-disconnect">
// </script>