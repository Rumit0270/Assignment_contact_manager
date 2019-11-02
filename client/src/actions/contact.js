import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT } from './types';
import apiService from '../services/apiService';

export const fetchContacts = () => {
    return async dispatch => {
        try {
            const contacts = await apiService.get('/api/contacts').then(res => res.data.data.contacts);
            dispatch({
                type: FETCH_CONTACTS,
                payload: contacts
            });

        } catch(err) {
            dispatch({
                type: FETCH_CONTACTS,
                payload: []
            });
        }
    };
};

export const deleteContact = (id) => {
    return async dispatch => {
        try {
            await apiService.delete(`/api/contacts/${id}`);
            dispatch({
                type: DELETE_CONTACT,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: DELETE_CONTACT,
                payload: null
            });
        }
    };
};

export const addContact = (data, callback) => {
    return async dispatch => {
        try {
            const contact = await apiService.post('/api/contacts/', data).then(res => res.data.data.contact);
            dispatch({
                type: ADD_CONTACT,
                payload: contact
            });
            callback();
        } catch(err) {
            console.log(err);
        }
    };
};

export const updateContact = (id, data, callback) => {
    return async dispatch => {
        try {
            const contact = await apiService.put(`/api/contacts/${id}`, data).then(res => res.data.data.contact);
            dispatch({
                type: UPDATE_CONTACT,
                payload: contact
            });
            callback();
        } catch(err) {
            console.log(err);
        }
    };
};