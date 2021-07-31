import { combineReducers } from 'redux';
import showFlagReducer from '@Reducers/showFlag';

const rootReducer = combineReducers({
  showFlagReducer
});

export default  rootReducer

export type RootState = ReturnType<typeof rootReducer>
