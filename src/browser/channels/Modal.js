import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import Channels from './Channels';

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, toggleIsModalActive } = this.props;
    return (
      <View
        style={{
          position: 'absolute',
          backgroundColor: theme.dark(0.8),
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div onClick={toggleIsModalActive} style={{height: '100%', width: '100%', zIndex: 1, position: 'absolute'}}/>
        <View style={{ zIndex: 2, width: '60%', height: '80%', backgroundColor: theme.bg() }}>
          <Channels />
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

export default connect(mapStateToProps)(Radium(Modal));
