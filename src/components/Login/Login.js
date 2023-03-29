import './Login.css'
import { login } from '../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userError = useSelector(state => state.auth.error)
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        await dispatch(login(formData, navigate));

        if(userError) {
            setIsAlertVisible(true)
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
        }
    }

    return (
        <div className="login_form_container d-flex flex-column justify-content-center align-items-center">
            <form className='login_form text-center col-11 col-md-8 col-lg-4 mx-auto' onSubmit={handleSubmit}>
                <div className='p-5'>
                    <h1 className="text-center mb-4">Log In</h1>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex flex-column '>
                            <label htmlFor="email" className='text-start'>Email</label>
                            <input type={"email"}  className="form-control" id="email"></input>
                        </div>

                        <div className='d-flex flex-column '>
                            <label htmlFor="password" className='text-start'>Password</label>
                            <input type={"password"} name="password" className="form-control" id="password"></input>
                        </div>
                    </div>

                    <button type='submit' className='login_submit btn mt-4 '>Enviar</button>

                </div>
                {
                    isAlertVisible && <h5 className='alert fw-bold'>{userError?.response?.data?.message}</h5>
                }
            </form>

        </div>
    )
}

export default Login;