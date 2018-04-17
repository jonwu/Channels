import * as ActionTypes from './actionTypes';

export function addChannel(channel) {
  return {
    type: ActionTypes.ADD_CHANNEL,
    channel,
  }
}
export function editChannel(index, channel) {
  return {
    type: ActionTypes.EDIT_CHANNEL,
    index,
    channel,
  }
}
export function deleteChannel(index) {
  return {
    type: ActionTypes.DELETE_CHANNEL,
    index,
  }
}
export function updateCurrentChannelIndex(index) {
  return {
    type: ActionTypes.UPDATE_CHANNEL_INDEX,
    index,
  }
}
