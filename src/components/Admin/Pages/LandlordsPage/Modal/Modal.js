import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import "./Modal.css"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { createLandlord, updateLandlord } from '../../../../../redux/actions/landlords';

const Modal = ({mode, setShowModal}) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const data = useSelector((state) => state.landlords.landlord);

    const dispatch = useDispatch();
    
    const fullName = useRef();
    const address = useRef();
    const city = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = {
            fullName: e.target.fullName.value,
            address: e.target.address.value,
            city: e.target.city.value
        }

        if(mode === 'Agregar') {
            dispatch(createLandlord(formData));
        } else if(mode === 'Editar') {
            dispatch(updateLandlord(data._id, formData))
        }

        setShowModal(false);
        document.body.style.overflow = "scroll";
    }

    const handleChange = (e) => {
        if(!fullName.current.value || !address.current.value || !city.current.value) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    return(
        <>
            <div className='darkBG'>
                <div className='centered'>
                    <div className='modalmio'>
                        <div className='modalHeader'>
                            <h1 className='heading'>{mode} propietario</h1>
                        </div>

                        <button className='closeBtn' onClick={() => setShowModal(false)}>
                            <FontAwesomeIcon icon={faXmark} style={{ marginBottom: "-3px" }} />
                        </button>

                        <div className='modalContent'>
                            <form className='d-flex flex-column gap-3' onChange={handleChange} onSubmit={(e) => handleSubmit(e)}>
                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Nombre completo: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.fullName : ""} className='form-control' name="fullName" ref={fullName}></input>
                                </div>

                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Domicilio: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.address : ""} className='form-control' name='address' ref={address}></input>
                                </div>

                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Localidad: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.city : ""} className='form-control' name='city' ref={city}></input>
                                </div>

                                <div className="modalActions">
                                    <div className='actionsContainer'>
                                        <button className={`deleteBtn ${isDisabled && 'disabled'}`} disabled={isDisabled}>
                                            Enviar
                                        </button>
                                        <button
                                            className='cancelBtn'
                                            onClick={() => {setShowModal(false); document.body.style.overflow = "scroll";}}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        

                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal;