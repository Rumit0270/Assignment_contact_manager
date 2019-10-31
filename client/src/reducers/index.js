import { combineReducers } from 'redux';
import authReducer from './auth';
import contactReducer from './contact';

export default combineReducers({
    auth: authReducer,
    contacts: contactReducer
});