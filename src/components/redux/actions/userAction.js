import { types } from './types';

export const loggedInUser = (user) => {
    return {
        type: types.LOGGED_IN_USER,
        payload: user
    }
}

export const users = (users) => {
    return {
        type: types.USERS,
        payload: users
    }
}