import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT } from '../actions/types';
import _ from 'lodash';

const INTIAL_STATE = [];

const contactsReducer = (state= INTIAL_STATE, action) => {

    switch(action.type) {
        case FETCH_CONTACTS:
            return [ ...action.payload];
        case DELETE_CONTACT:
            if(!action.payload) { return state }
            return _.filter(state, (contact) => contact.id !== action.payload);
        case ADD_CONTACT:
            return [ ...state, action.payload ];
        case UPDATE_CONTACT:
            const filterContacts = _.filter(state, (contact) => contact.id !== action.payload.id);
            return [ ...filterContacts, action.payload ]
        default:
            return state;
    }
};

export default contactsReducer;
