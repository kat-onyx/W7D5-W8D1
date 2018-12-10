
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/sessions_actions';
import merge from 'loash/merge'

const _nullUser = Object.freeze({
    id: null
  });

const sessionReducer = (oldState = _nullUser, action) => {
   
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { id: action.currentUser.id})
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState
    }
}

export default sessionReducer;