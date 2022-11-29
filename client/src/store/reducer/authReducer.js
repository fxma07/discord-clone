import { authActions } from "../actions/authActions";


const userDetails = localStorage.getItem("user")
const parsed = JSON.parse(userDetails);

const initState = {
  userDetails: parsed,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
