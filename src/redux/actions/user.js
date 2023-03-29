import * as api from '../../api'

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const {email, password} = formData;
        let apiRes = await api.login(email, password);
        dispatch({type: 'AUTH', apiRes})
        navigate('/')

    } catch (error) {
        dispatch({type: 'ERROR', error})
    }
}