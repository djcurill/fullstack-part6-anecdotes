import { combineReducers } from 'redux';
import anecdoteReducer from './reducers/anecdoteSlice';
import notificationReducer from './reducers/notificationSlice';
import filterReducer from './reducers/filterSlice';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filterByText: filterReducer,
});

export default reducer;
