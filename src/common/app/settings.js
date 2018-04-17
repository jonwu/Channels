import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import collections from '../utils/themes';
import generateStyles from '../utils/gstyles';

function theme(state = collections[0]) {
  return state;
}
function gstyles(state = generateStyles(collections[0])) {
  return state;
}

export default combineReducers({
  theme,
  gstyles,
})
