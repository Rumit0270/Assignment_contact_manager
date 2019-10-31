import { FETCH_CONTACTS } from '../actions/types';

const INTIAL_STATE = [];

const contactsReducer = (state= INTIAL_STATE, action) => {

    switch(action.type) {
        case FETCH_CONTACTS:
            return [ ...state, ...action.payload];
        default:
            return state;
    }
};

export default contactsReducer;
