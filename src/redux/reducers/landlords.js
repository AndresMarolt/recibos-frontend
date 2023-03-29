import { START_LOADING, FINISH_LOADING, FETCH_LANDLORDS, FETCH_LANDLORD, CREATE_LANDLORD, UPDATE_LANDLORD, DELETE_LANDLORD } from "../../constants/actionTypes"

export default (state = {isLoading: true, landlords: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true}
        case FINISH_LOADING:
            return {...state, isLoading: false}
        case FETCH_LANDLORDS:
            return {...state, landlords: action.payload}
        case FETCH_LANDLORD:
            return {...state, landlord: action.payload}
        case CREATE_LANDLORD:
            return {...state, landlords: [...state.landlords, action.payload]};
        case UPDATE_LANDLORD:
            return {...state, landlords: state.landlords.map(lan => (lan._id === action.payload._id ? action.payload : lan))}
        case DELETE_LANDLORD:
            return {...state, landlords: state.landlords.filter(lan => lan._id !== action.payload)};
        default:
            return state;
    }
}