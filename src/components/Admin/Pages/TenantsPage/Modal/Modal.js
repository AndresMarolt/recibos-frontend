import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { createTenant, updateTenant } from '../../../../../redux/actions/tenants';
import "./Modal.css"
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';


const Modal = ({mode, setShowModal}) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const data = useSelector((state) => state.tenants.tenant);

    const dispatch = useDispatch();

    const fullName = useRef();
    const address = useRef();
    const city = useRef();
    const estateAddress = useRef();
    const estateCity = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = {
            fullName: e.target.fullName.value,
            address: e.target.address.value,
            city: e.target.city.value,
            estateAddress: e.target.estateAddress.value,
            estateCity: e.target.estateCity.value
        }

        if(mode === 'Agregar') {
            await dispatch(createTenant(formData));
        } else if(mode === 'Editar') {
            await dispatch(updateTenant(data._id, formData))
        }

        setShowModal(false);
        document.body.style.overflow = "scroll";

    }

    const handleChange = (e) => {
        if(!fullName.current.value || !address.current.value || !city.current.value || !estateAddress.current.value || !estateCity.current.value) {
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
                            <h1 className='heading'>{mode} inquilino</h1>
                        </div>

                        <button className='closeBtn' onClick={() => {setShowModal(false); document.body.style.overflow = "scroll";}}>
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
                                    <input type="text" defaultValue={mode==='Editar' ? data?.address : ""} className='form-control' name='address' ref={address} ></input>
                                </div>

                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Localidad: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.city : ""} className='form-control' name='city' ref={city} ></input>
                                </div>

                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Alquiler: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.estateAddress : ""} className='form-control' name='estateAddress' ref={estateAddress} ></input>
                                </div>

                                <div className='d-flex gap-4 align-items-center'>
                                    <label className='col-4'>Localidad (alquiler): </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.estateCity : ""} className='form-control' name='estateCity' ref={estateCity} ></input>
                                </div>

                                <div className="modalActions">
                                    <div className='actionsContainer'>
                                        <button className={`deleteBtn ${isDisabled && 'disabled'}`} disabled={isDisabled}>
                                            Enviar
                                        </button>
                                        <button
                                            className='cancelBtn'
                                            onClick={() => setShowModal(false)}
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

            {/* <FontAwesomeIcon icon={faXmark} /> */}
        </>
    )
}

export default Modal;