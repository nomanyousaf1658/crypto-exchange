import { types } from "../actions/types";

const initialState = {
    logged_in_user: {},
    users: []
}

const selectUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS:
            return {
                ...state,
                users: action.payload
            }
        case types.LOGGED_IN_USER:
            return {
                ...state,
                logged_in_user: action.payload
            }
        default:
            return state;
    }
}

export default selectUserReducer;