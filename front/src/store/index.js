import { createStore, combineReducers } from 'redux';
import loaderReducer from './reducers/loader';

const store = createStore(combineReducers({
  loader: loaderReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;