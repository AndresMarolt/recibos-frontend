import { START_LOADING, FINISH_LOADING, FETCH_LANDLORDS, FETCH_LANDLORD, CREATE_LANDLORD, UPDATE_LANDLORD, DELETE_LANDLORD } from "../../constants/actionTypes"

export default (state = {authData: null, error: null, isLoading: true}, action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('token', action.apiRes.data.token);
            return {...state, authData: action?.apiRes.data, error: null};
        case 'LOGOUT':
            return {...state, authData: null, error: null}
        case 'ERROR':
            return {...state, authData: null, error: action.error}
        case 'START_LOADING':
            return {...state, isLoading: true}
        case 'FINISH_LOADING':
            return {...state, isLoading: false}
        default:
            return state;
    }
}