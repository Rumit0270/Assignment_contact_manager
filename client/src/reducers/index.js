import { combineReducers } from 'redux';
import authReducer from './auth';
import contactReducer from './contact';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    contacts: contactReducer,
    form: formReducer
});