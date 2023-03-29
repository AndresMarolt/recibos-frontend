import { combineReducers } from "redux";

import tenants from "./tenants";
import landlords from "./landlords"
import auth from "./user"

export default combineReducers({ tenants, landlords, auth });