import React from 'react';
import PropTypes from 'prop-types';

function channel(props) {
  return (
    <div 
      className={`channel ${props.currentChannel ? 'currentChannel' : ''} ${props.selected ? 'selected' : ''}`}
      data-bind='
    event: {
      contextmenu: openContextMenu,
    }' // We're handling context menu a little differently..
      name={props.name}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    >
      <div className='channel-status'>
        <img 
          class='channel-description' 
          style={{visible: !!props.description}}
          alt='description' 
          src='../svg/comment.svg'
        />
      </div>
      {
        props.description && (
          <div 
            className='channel-description tooltip' 
            data-bind='html: description' //??? I have to render html below here??
          
          />
        )
      }
      {
        // This nested ternary is against most style guides, but I think here it is the most compact
        // Though I'm not sure that this is *Correct* behavior, it is what is in the forked-from repo
        props.currentChannel ? (
          <img 
            className='channel-icon-active' 
            src='../svg/channel_active.svg'
          />
        ) : (
          props.linked ? (
            <img 
              className='channel-icon-linked' 
              src='../svg/channel_linked.svg'
          />
          ) : (
            <img 
              className='channel-icon' 
              src='../svg/channel.svg'
            />
          )
        )
      } 
      
      <div className='channel-name'>
        <span>{props.name}</span>
        {
          props.displayUserCount && props.userCount !== 0 && (
            <span>{props.userCount}</span>
          )
        }
      </div>
    </div>
  )
}

channel.propTypes = {
  currentChannel: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  linked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string, // ?? It's html??
}

export default channel;