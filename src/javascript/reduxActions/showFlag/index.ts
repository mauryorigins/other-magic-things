import { Dispatch, AnyAction } from 'redux'
import { INVERT_FLAG } from 'Types';

export const changeFlag = (currentFlag: boolean) => (dispatch: Dispatch<AnyAction>) => {
  console.log('entro change flag con: ', currentFlag);

  dispatch({
    type: INVERT_FLAG,
    payload: !currentFlag
  });
};
