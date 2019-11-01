import { FETCH_CONTACTS, DELETE_CONTACT } from '../actions/types';
import _ from 'lodash';

const INTIAL_STATE = [];

const contactsReducer = (state= INTIAL_STATE, action) => {

    switch(action.type) {
        case FETCH_CONTACTS:
            return [ ...state, ...action.payload];
        case DELETE_CONTACT:
            if(!action.payload) { return state }
            return _.filter(state, (contact) => contact.id !== action.payload);
        default:
            return state;
    }
};

export default contactsReducer;
