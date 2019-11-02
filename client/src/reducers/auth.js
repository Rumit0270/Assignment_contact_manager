import { AUTH_USER, AUTH_ERROR, LOGOUT_USER } from '../actions/types';

const INTIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

const authReducer = (state= INTIAL_STATE, action) => {

    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        case LOGOUT_USER:
            return { ...state, authenticated: null }
        default:
            return state;
    }
};

export default authReducer;
