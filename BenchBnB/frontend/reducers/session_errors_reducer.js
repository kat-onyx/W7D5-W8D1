import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/sessions_actions';

const sessionErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return {errors: action.errors}
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;