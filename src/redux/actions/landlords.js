import {CREATE_LANDLORD, UPDATE_LANDLORD, DELETE_LANDLORD, FETCH_LANDLORDS, START_LOADING, FINISH_LOADING, FETCH_LANDLORD} from '../../constants/actionTypes'
import * as api from '../../api'

export const getLandlords = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchLandlords();
        await dispatch({type: FETCH_LANDLORDS, payload: data})
        await dispatch({type: FINISH_LOADING})
    } catch (error) {
        console.log("Error reading landlords");
    }
}

export const getLandlord = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchLandlord(id);
        dispatch({type: FETCH_LANDLORD, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createLandlord = (landlordData) => async (dispatch) => {
    try {
        landlordData.fullName = landlordData.fullName.toUpperCase();
        landlordData.address = landlordData.address.toUpperCase();
        landlordData.city = landlordData.city.toUpperCase();
        const {data} = await api.postLandlord(landlordData);
        dispatch({type: CREATE_LANDLORD, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateLandlord = (id, newData) => async (dispatch) => {
    try {
        newData.fullName = newData.fullName.toUpperCase();
        newData.address = newData.address.toUpperCase();
        newData.city = newData.city.toUpperCase();
        const {data} = await api.updateLandlord(id, newData);
        dispatch({type: UPDATE_LANDLORD, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteLandlord = (id) => async (dispatch) => {
    try {
        await api.deleteLandlord(id);
        dispatch({type: DELETE_LANDLORD, payload: id});
    } catch (error) {
        console.log(error);
    }
}