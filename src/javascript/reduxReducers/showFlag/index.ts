import { INVERT_FLAG } from 'Types';

const INITIAL_STATE = {
  showImg: true
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INVERT_FLAG:
      return {
        ...state,
        showImg: action.payload
      };

    default:
      return state;
  }
};
