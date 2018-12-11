import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/sessions_actions';

const usersReducer = (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
        merge({}, state, { [action.user.id]: action.currentUser })
        default:
            return oldState;
    }
}

export default usersReducer;