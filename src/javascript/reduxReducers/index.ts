// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import {ReducerState as AppInfoState} from '@Reducers/appInfo/customTypes';
// ---Reducers
import showFlagReducer from '@Reducers/showFlag';
import appInfoReducer from '@Reducers/appInfo';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
  showFlagReducer: {
    showImg: boolean
  };
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  showFlagReducer,
  appInfoReducer
});

export default  rootReducer
