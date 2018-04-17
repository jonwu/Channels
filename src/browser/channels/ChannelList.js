import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import ChannelItem from './ChannelItem';

class ChannelList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, channels } = this.props;
    return (
      <View>
        {channels.map((channel, index) => {
          return <ChannelItem key={index} index={index} channel={channel} />;
        })}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    channels: state.app.channels,
  };
}

export default connect(mapStateToProps)(Radium(ChannelList));
