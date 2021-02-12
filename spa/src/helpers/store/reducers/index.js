import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { files } from './files.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    files,
    users,
    alert
});

export default rootReducer;