import { FETCH_CONTACTS } from './types';
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