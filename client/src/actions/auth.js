import { AUTH_USER, AUTH_ERROR } from './types';
import apiService from '../services/apiService';

export const login = (data) => {
    return async dispatch => {

        try {
            const response = await apiService.post('/api/users/login', data);
            const token = response.data.token;
            localStorage.setItem('token', token);

            console.log('----------------------');
            console.log(token)
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