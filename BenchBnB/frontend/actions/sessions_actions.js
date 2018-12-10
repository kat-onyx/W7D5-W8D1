import * as sessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = () => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const login = (user) => dispatch => {
    sessionUtil.login(user)
    .then((resp) => dispatch(receiveCurrentUser(resp))),
    err => dispatch(receiveErrors(err))
}

export const logout = () => dispatch => {
    sessionUtil.logout()
    .then((resp) => dispatch(logoutCurrentUser(resp))), 
    err => (
        dispatch(receiveErrors(err))
    )
}

export const signup = (user) => dispatch => {
    sessionUtil.signup(user)
    .then((resp) => dispatch(receiveCurrentUser(resp))),
    err => dispatch(receiveErrors(err))
}