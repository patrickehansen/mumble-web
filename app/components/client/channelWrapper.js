import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Channel from './channel';
import UserWrapper from './userWrapper';

class ChannelWrapper extends Component {
  state = {
    expanded: false
  }

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    return (
      <div className="channel-wrapper">
        {(this.props.users.length > 0 || this.props.channels.length > 0) && <div className="channel-tree" />}
        {
          this.props.channels.length > 0 ? (
            <div className="branch" />
            ) : (
            <img 
              className={`branch-${this.state.expaned ? 'open' : 'closed'}`}
              src={`.../svg/branch-${this.state.expaned ? 'open' : 'closed'}`}
              donClick={this.toggleExpanded}
            />
          )
        }
        <div className="channel-sub" data-bind="template: {name: 'channel', data: $data}">
          <Channel channel={this.props.channel}/>
          {
            this.state.expanded && (
              <div>
                {
                  this.props.users.map((v,i) => {
                    return <UserWrapper user={v} key={i} />;
                  })
                }
                {
                  this.props.channels.map((v,i) => {
                    return <ChannelWrapper channel={v} key={i} />;
                  })
                }
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

ChannelWrapper.propTypes = {
  channel: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  channels: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(ChannelWrapper);