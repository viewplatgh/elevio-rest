import { SEARCH_ELEV, UPDATE_SEARCH_RESULT } from '../actions';

const initialState = {
  keyword: '',
  result: []
};

export default function elevReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ELEV:
      return { ...state, keyword: action.keyword };
    case UPDATE_SEARCH_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
}
