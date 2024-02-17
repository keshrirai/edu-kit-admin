import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { dashboard } from './dashboard.reducer';
import { admissionEnquiry } from './admissionEnquiry.reducer';


const rootReducer = combineReducers({
  //branch,
  authentication,
  users,
  alert,
  dashboard,
  admissionEnquiry
});

export default rootReducer;
