import { useState, useMemo, useEffect } from "react";
import TenantsTable from "./Table/Table";
import { getTenants, getTenant } from "../../../../redux/actions/tenants";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from 'react-redux'

const TenantsPage = () => {

    const dispatch = useDispatch();

    const fetchTenants = async () => {
        dispatch(getTenants());
    }

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const onEdit = async (id) => {
        setIsEditing(true);
        await dispatch(getTenant(id))
        // document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    const onAdd = async () => {
        setIsEditing(false); 
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    const columns = useMemo(() => [
        {
            Header: 'Datos Personales',
            columns: [
                {
                    Header: 'Nombre Completo',
                    accessor: 'fullName'
                },
                {
                    Header: 'Domicilio',
                    accessor: 'address'
                },
                {
                    Header: 'Localidad',
                    accessor: 'city'
                }
            ]
        },
        {
            Header: 'Alquiler',
            columns: [
                {
                    Header: 'Dirección',
                    accessor: 'estateAddress'
                },
                {
                    Header: 'Localidad',
                    accessor: 'estateCity'
                }
            ]
        }
    ])

    fetchTenants();

    return (
        <>
            <button className="mb-4 btn btn-success" onClick={onAdd}>Agregar un nuevo inquilino</button>

            {
                showModal && <Modal setShowModal={setShowModal} mode={isEditing ? 'Editar' : 'Agregar'}/>
            }

            <TenantsTable columns={columns} onEdit={onEdit} setIsEditing={setIsEditing} />
        </>
    )
}

export default TenantsPage;