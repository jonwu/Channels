import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';

// {
//   title:
//   description:
// }
function channels(state = [], action) {
  switch(action.type) {
    case ActionTypes.ADD_CHANNEL:
      return [...state, action.channel]
    case ActionTypes.EDIT_CHANNEL:
      return state.map((channel, index) => {
        if (index === action.index) return action.channel;
        return channel;
      })
    case ActionTypes.DELETE_CHANNEL:
      return state.filter((channel, index) => {
        return index !== action.index;
      })
    default:
      return state;
  }
}
function currentChannelIndex(state = null, action) {
  switch(action.type) {
    case ActionTypes.UPDATE_CHANNEL_INDEX:
      return action.index;
    default:
      return state;
  }
}
export default combineReducers({
  channels,
  currentChannelIndex,
});
