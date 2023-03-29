import {CREATE_TENANT, UPDATE_TENANT, DELETE_TENANT, FETCH_TENANTS, START_LOADING, FINISH_LOADING, FETCH_ONE} from '../../constants/actionTypes'
import * as api from '../../api'

export const getTenants = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchTenants();
        await dispatch({type: FETCH_TENANTS, payload: data})
        await dispatch({type: FINISH_LOADING})
    } catch (error) {
        console.log("Error reading tenants");
    }
}

export const getTenant = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchTenant(id);
        dispatch({type: FETCH_ONE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createTenant = (tenantData) => async (dispatch) => {
    try {
        tenantData.fullName = tenantData.fullName.toUpperCase();
        tenantData.address = tenantData.address.toUpperCase();
        tenantData.city = tenantData.city.toUpperCase();
        tenantData.estateAddress = tenantData.estateAddress.toUpperCase();
        tenantData.estateCity = tenantData.estateCity.toUpperCase();
        const {data} = await api.postTenant(tenantData);
        dispatch({type: CREATE_TENANT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateTenant = (id, newData) => async (dispatch) => {
    try {
        newData.fullName = newData.fullName.toUpperCase();
        newData.address = newData.address.toUpperCase();
        newData.city = newData.city.toUpperCase();
        newData.estateAddress = newData.estateAddress.toUpperCase();
        newData.estateCity = newData.estateCity.toUpperCase();
        const {data} = await api.updateTenant(id, newData);
        console.log(data);
        dispatch({type: UPDATE_TENANT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTenant = (id) => async (dispatch) => {
    try {
        await api.deleteTenant(id);
        dispatch({type: DELETE_TENANT, payload: id});
    } catch (error) {
        console.log(error);
    }
}