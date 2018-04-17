import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from '../app/components';
import { rehydrate } from '../storage/storage.js'
import configureStore from './store/configureStore';
import Home from '../home/Home';
import collections from '../../common/utils/themes';
import generateStyles from '../../common/utils/gstyles';

let initialState = JSON.parse(rehydrate('INITIAL_STATE'));

// Transform settings because there are functions in my state (via theme)...
if (initialState.settings) {
  const settings = initialState.settings;
  const nextSettings = Object.assign({}, initialState.settings, {
    theme: collections[settings.theme.id],
    gstyles: generateStyles(collections[settings.theme.id]),
  });
  initialState = Object.assign({}, initialState, {
    settings: nextSettings,
  });

}
const store = configureStore(initialState);

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme } = this.props;
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
