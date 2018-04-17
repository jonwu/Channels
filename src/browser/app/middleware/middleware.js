import { save } from '../../storage/storage';

const middleware = store => next => action => {
  const currState = store.getState();
  const result = next(action);
  const nextState = store.getState();
  console.log("nextState", nextState)
  save('INITIAL_STATE', JSON.stringify(nextState));
};

export default middleware;
