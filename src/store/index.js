import { combineReducers, createStore } from 'redux';
import forecasts from './reducers/forecasts';

export default createStore(combineReducers({
  forecasts
}));
