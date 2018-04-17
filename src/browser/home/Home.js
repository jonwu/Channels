import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from '../app/components';
import Modal from '../channels/Modal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
    }
    this.toggleIsModalActive = this.toggleIsModalActive.bind(this);
  }
  toggleIsModalActive() {
    this.setState({
      isModalActive: !this.state.isModalActive,
    })
  }
  render() {
    const { gstyles, theme, channelLength } = this.props;
    const { isModalActive } = this.state;
    return (
      <View
        style={{
          height: '100%',
          backgroundColor: theme.bg(),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <View row style={{alignItems: 'center'}}>
          <View
            onClick={this.toggleIsModalActive}
            style={[{
              padding: theme.spacing_2,
              backgroundColor: theme.red(),
              borderRadius: theme.borderRadius,
              cursor: 'pointer',
            }, gstyles.right_2]}
          >
            <div style={[gstyles.p1, { color: theme.light() }]}>Hello World</div>
          </View>
          <div style={[gstyles.h1, { color: theme.text() }]}>{channelLength}</div>
        </View>
        {isModalActive && <Modal toggleIsModalActive={this.toggleIsModalActive}/>}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    channelLength: state.app.channels.length,
  };
}

export default connect(mapStateToProps)(Radium(Home));
