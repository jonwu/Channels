import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import { editChannel, deleteChannel, updateCurrentChannelIndex } from '../../common/app/actions';

class ChannelContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.currentChannel.description,
    }
    this.editChannel = this.editChannel.bind(this)
    this.deleteChannel = this.deleteChannel.bind(this)
  }
  editChannel() {
    const { editChannel, currentChannel, index } = this.props;
    const { description } = this.state;
    const updatedChannel = Object.assign({}, currentChannel, {
      description,
    });
    editChannel(index, updatedChannel);
  }
  deleteChannel() {
    const { index, deleteChannel, updateCurrentChannelIndex } = this.props;
    deleteChannel(index);
    updateCurrentChannelIndex(null);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentChannel !== nextProps.currentChannel) {
      this.setState({
        description: nextProps.currentChannel.description
      })
    }
  }
  render() {
    const { gstyles, theme, currentChannel } = this.props;
    const { description } = this.state;
    return (
      <View style={{padding: theme.spacing_2}}>
        <textarea value={description} onChange={(e) => this.setState({description: e.target.value})} />
        <View
          onClick={this.editChannel}
          style={{
            padding: theme.spacing_2,
            backgroundColor: theme.red(),
            borderRadius: theme.borderRadius,
            cursor: 'pointer',
          }}
        >
          <div style={[gstyles.p1, { color: theme.light() }]}>Save</div>
        </View>

        <View
          onClick={this.deleteChannel}
          style={{
            padding: theme.spacing_2,
            backgroundColor: theme.blue(),
            borderRadius: theme.borderRadius,
            cursor: 'pointer',
          }}
        >
          <div style={[gstyles.p1, { color: theme.light() }]}>Delete</div>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    currentChannel: state.app.channels[ownProps.index],
  };
}

export default connect(
  mapStateToProps,
  { editChannel, deleteChannel, updateCurrentChannelIndex },
)(Radium(ChannelContent));
