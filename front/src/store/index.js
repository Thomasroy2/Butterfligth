import { createStore, combineReducers } from 'redux';
import loaderReducer from './reducers/loader';
import attackReducer from './reducers/attack';
import fightroomReducer from './reducers/fightroom';
import winnerReducer from './reducers/winner';

const store = createStore(combineReducers({
  loader: loaderReducer,
  attack: attackReducer,
  fightroom: fightroomReducer,
  winner: winnerReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;