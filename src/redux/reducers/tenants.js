import { START_LOADING, FINISH_LOADING, FETCH_TENANTS, FETCH_ONE, CREATE_TENANT, UPDATE_TENANT, DELETE_TENANT } from "../../constants/actionTypes"

const tenantsReducer = (state = {isLoading: true, tenants: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true}
        case FINISH_LOADING:
            return {...state, isLoading: false}
        case FETCH_TENANTS:
            return {...state, tenants: action.payload}
        case FETCH_ONE:
            return {...state, tenant: action.payload}
        case CREATE_TENANT:
            return {...state, tenants: [...state.tenants, action.payload]};
        case UPDATE_TENANT:
            return {...state, tenants: state.tenants.map(ten => (ten._id === action.payload._id ? action.payload : ten))}
        case DELETE_TENANT:
            return {...state, tenants: state.tenants.filter(ten => ten._id !== action.payload)};
        default:
            return state;
    }
}

export default tenantsReducer;