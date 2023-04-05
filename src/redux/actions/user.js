import * as api from '../../api'

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const {email, password} = formData;
        dispatch({type: 'START_LOADING'});
        let apiRes = await api.login(email, password);
        dispatch({type: 'AUTH', apiRes})
        dispatch({type: 'FINISH_LOADING'});
        navigate('/')

    } catch (error) {
        dispatch({type: 'ERROR', error})
    }
}