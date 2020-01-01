import React, {Component} from 'react';
import { connect } from 'react-redux';
import ChannelContextMenu from './channelContextMenu';
import UserContextMenu from './userContextMenu';

class ChannelList extends Component {
  state = {

  }

  render() {
    return (
      <div className='channel-root-container'>
        <div className='channel-root'>
          <ChannelWrapper channel={this.props.root} />
        </div>
        <div className='channelContextMenus'>
          <ChannelContextMenu
            open={}
            close={}
          />
          <UserContextMenu
            open={}
            close={}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    root: state.connection.root,
  }
}

export default connect(mapStateToProps)(ChannelList);