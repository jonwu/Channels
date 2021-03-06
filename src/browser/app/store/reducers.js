import { combineReducers } from 'redux';
import app from '../../../common/app';


const reducers = combineReducers({
  settings: app.settings,
  app: app.reducer,
})

export default reducers;
