import { Dispatch, AnyAction } from 'redux'
import { INVERT_FLAG } from 'Types';

export const changeFlag = (currentFlag: boolean) => (dispatch: Dispatch<AnyAction>): void => {
  console.log('siguiente flag: ', !currentFlag);

  dispatch({
    type: INVERT_FLAG,
    payload: !currentFlag
  });
};

export default null