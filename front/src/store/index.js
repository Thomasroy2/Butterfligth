import { createStore, combineReducers } from 'redux';
import loaderReducer from './reducers/loader';
import attackReducer from './reducers/attack';
import fightroomReducer from './reducers/fightroom';

const store = createStore(combineReducers({
  loader: loaderReducer,
  attack: attackReducer,
  fightroom: fightroomReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;