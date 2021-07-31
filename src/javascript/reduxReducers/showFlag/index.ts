import { INVERT_FLAG } from 'Types';

interface Action {
  type: string;
  payload?: unknown;
}

const INITIAL_STATE = {
  showImg: false
};

export default (state = INITIAL_STATE, action: Action) => {
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
