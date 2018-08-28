import { SHOW_TALENT_FRAMEWORK } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.talentFrameworkReducer, action = {}) => {
  switch (action.type) {
    case SHOW_TALENT_FRAMEWORK:
      return {
        ...state,
        showTalent: true,
        framework: action.framework
      };
      break;
  
    default:
      return state;
      break;
  }
};
