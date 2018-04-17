import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import ChannelList from './ChannelList';
import ChannelAdd from './ChannelAdd';
import ChannelContent from './ChannelContent';

class Channels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, currentChannelIndex } = this.props;
    return (
      <View row style={{flex: 1, backgroundColor: theme.blue()}}>
        <View style={{width: '20%', backgroundColor: theme.bg()}}>
          <ChannelAdd />
          <ChannelList />
        </View>
        <View style={{width: '80%', backgroundColor: theme.bg2()}}>
          {currentChannelIndex !== null && <ChannelContent index={currentChannelIndex} /> }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    currentChannelIndex: state.app.currentChannelIndex,
  };
}

export default connect(
  mapStateToProps,
)(Radium(Channels));
