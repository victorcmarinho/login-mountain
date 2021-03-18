import { combineReducers } from 'redux';

import { login } from './userReducer';

const appReducer = combineReducers({
    login
});

export default appReducer;