import { AUTH_USER, AUTH_ERROR, LOGOUT_USER } from './types';
import apiService from '../services/apiService';

export const login = (data) => {
    return async dispatch => {
        try {
            const response = await apiService.post('/api/users/login', data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            dispatch({
                type: AUTH_USER,
                payload: token
            });

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Error logging in.'
            });
        }
    }
};

export const logout = () => {

    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER,
        payload: null
    }
};