import { combineReducers } from 'redux';
import showFlagReducer from '@Reducers/showFlag';

const rootReducer = combineReducers({
  showFlagReducer
});

export default  rootReducer

export interface ReduxState {
  showFlagReducer: {
    showImg: boolean
  }
}