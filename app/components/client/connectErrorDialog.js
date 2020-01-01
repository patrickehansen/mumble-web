import React from 'react';

const errorMessages = [
  'The connection has been refused.',
  'The server uses an incompatible version.',
  'Your user name was rejected. Maybe try a different one?',
  'The given password is incorrect.\nThe user name you have chosen requires a special one.',
  'The given password is incorrect.',
  'The user name you have chosen is already in use.',
  'The server is full.',
  'The server requires you to provide a client certificate, which is not supported by this web application.',
  'The connection has been refused.',
]


function ConnectErrorDialogElement(props) {
  return (
    <div class="connect-dialog error-dialog dialog" data-bind="visible: visible()">
      <div class="dialog-header">
        Failed to connect
      </div>
      <form data-bind="submit: connect">
        <table>
            <tr>
              <td colspan={2}>
                {
                  errorMessages[props.type]
                }
                <br />
                The server reports:
                <br />
                "<span class="connect-error-reason" data-bind="text: reason"></span>"
              </td>
            </tr>
            <tr data-bind="if: type() == 2 || type() == 3 || type() == 5">
              <td>Username</td>
              <td><input id="username" type="text" data-bind="value: username" required/></td>
            </tr>
            <tr data-bind="if: type() == 3 || type() == 4">
              <td>Password</td>
              <td><input id="password" type="password" data-bind="value: password" required/></td>
            </tr>
        </table>
        <div class="dialog-footer">
          <input 
            class="dialog-close" 
            type="button" 
            value="Cancel"
            data-bind="click: hide, visible: !joinOnly()"/>
          <input class="dialog-submit" type="submit" value="Retry"/>
        </div>
      </form>
    </div>
  )
}
  
function ConnectErrorDialog (connectDialog) {
  var self = this
  self.type = ko.observable(0)
  self.reason = ko.observable('')
  self.username = connectDialog.username
  self.password = connectDialog.password
  self.joinOnly = connectDialog.joinOnly
  self.visible = ko.observable(false)
  self.show = self.visible.bind(self.visible, true)
  self.hide = self.visible.bind(self.visible, false)
  self.connect = () => {
    self.hide()
    connectDialog.connect()
  }
}