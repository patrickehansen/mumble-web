import React, { PureComponent} from 'react';

class ConnectDialog extends PureComponent {
  submit = (e) => {
    const {elements} = e.target.elements;


    this.props.close();
    ui.connect(self.username(), self.address(), self.port(), self.token(), self.password())
  }

  render() {
    return (
      <div className="connect-dialog dialog">
        <div className="dialog-header">
          Connect to Server
        </div>
        <form 
          onSubmit={this.submit}
        >
          <table>
              <tr>
                <td>Address</td>
                <td><input id="address" type="text" defaultValue={this.props.address} required/></td>
              </tr>
              <tr>
                <td>Port</td>
                <td><input id="port" type="text" defaultValue={this.props.port} required/></td>
              </tr>
              <tr>
                <td>Token</td>
                <td><input id="token" type="text" defaultValue={this.props.token}/></td>
              </tr>
              <tr>
                <td>Username</td>
                <td><input id="username" type="text" defaultValue={this.props.username} required/></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input id="password" type="password" defaultValue={this.props.password} /></td>
              </tr>
          </table>
          <div className="dialog-footer">
            <input className="dialog-close" type="button" data-bind="click: hide" value="Cancel"/>
            <input className="dialog-submit" type="submit" value="Connect"/>
          </div>
        </form>
      </div>
    )
  }
}

function JoinDialog() {
  return (
    <div class="join-dialog dialog" data-bind="visible: visible() && joinOnly()">
      <div class="dialog-header">
        Mumble Voice Conference
      </div>
      <form data-bind="submit: connect">
        <input class="dialog-submit" type="submit" value="Join Conference" />
      </form>
    </div>
  )
}
