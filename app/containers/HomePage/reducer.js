import { POST_COMPANY_ONBOARDING } from './constants';
// The initial state of the App
const initialState = {
  value: ''
};

function changeValueReducer(state = initialState, action) {
  switch (action.type) {
    case POST_COMPANY_ONBOARDING:
      return {
        value: action.value
      };
    default:
      return state;
  }
}

export default changeValueReducer;
