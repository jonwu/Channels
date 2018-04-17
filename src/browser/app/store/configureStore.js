import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import middleware from '../middleware/middleware';

const enhancer = compose(
  applyMiddleware(middleware),
);
const configureStore = (initialState) => {
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
export default configureStore;
