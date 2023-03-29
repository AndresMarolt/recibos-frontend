import axios from 'axios'

const API = axios.create({ baseURL: 'https://recibos-backend.vercel.app/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
});

export const fetchTenants = () => API.get(`/api/tenants/`);
export const postTenant = (formData) => API.post(`api/tenants/`, formData);
export const fetchTenant = (id) => API.get(`/api/tenants/${id}`);
export const updateTenant = (id, newData) => API.put(`/api/tenants/${id}`, newData);
export const deleteTenant = (id) => API.delete(`api/tenants/${id}`);


export const fetchLandlords = () => API.get(`/api/landlords/`);
export const postLandlord = (formData) => API.post(`api/landlords/`, formData);
export const fetchLandlord = (id) => API.get(`/api/landlords/${id}`);
export const updateLandlord = (id, newData) => API.put(`/api/landlords/${id}`, newData);
export const deleteLandlord = (id) => API.delete(`api/landlords/${id}`);

// AUTH
export const login = (email, password) => API.post(`/api/users/login`, {email, password})