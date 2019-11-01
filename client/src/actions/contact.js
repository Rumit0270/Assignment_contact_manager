import { FETCH_CONTACTS, DELETE_CONTACT } from './types';
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