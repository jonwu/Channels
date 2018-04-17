import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import { addChannel } from '../../common/app/actions';

class ChannelAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
    this.addChannel = this.addChannel.bind(this);
  }
  addChannel() {
    const { addChannel } = this.props;
    const { title } = this.state;
    addChannel({
      title,
      description: '',
    })
  }
  render() {
    const { gstyles, theme } = this.props;
    const { title } = this.state;
    return (
      <View>
        <input title={title} onChange={(e) => this.setState({title: e.target.value})} />
        <View
          onClick={this.addChannel}
          style={{
            padding: theme.spacing_2,
            backgroundColor: theme.red(),
            borderRadius: theme.borderRadius,
            cursor: 'pointer',
          }}
        >
          <div style={[gstyles.p1, { color: theme.light() }]}>Create Tab</div>
        </View>
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

export default connect(
  mapStateToProps,
  { addChannel }
)(Radium(ChannelAdd));
