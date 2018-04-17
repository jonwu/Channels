import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import { updateCurrentChannelIndex } from '../../common/app/actions';

class ChannelItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, channel, updateCurrentChannelIndex, index } = this.props;
    return (
      <View onClick={() => updateCurrentChannelIndex(index)} style={{ height: 50, paddingLeft: theme.spacing_2 }}>
        <div style={[gstyles.p1, { color: theme.text() }]}>{channel.title}</div>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(mapStateToProps, { updateCurrentChannelIndex })(Radium(ChannelItem));
