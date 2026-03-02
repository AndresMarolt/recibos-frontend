import { useState, useMemo, useEffect } from "react";
import TenantsTable from "./Table/Table";
import { getLandlord, getLandlords } from "../../../../redux/actions/landlords";
import Modal from "./Modal/Modal";
import { useDispatch } from "react-redux";

const LandlordsPage = () => {
  const dispatch = useDispatch();

  const fetchLandlords = async () => {
    dispatch(getLandlords());
  };

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = async (id) => {
    setIsEditing(true);
    await dispatch(getLandlord(id));
    setShowModal(true);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Datos Personales",
        columns: [
          {
            Header: "Nombre Completo",
            accessor: "fullName",
          },
          {
            Header: "Domicilio",
            accessor: "address",
          },
          {
            Header: "Localidad",
            accessor: "city",
          },
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    fetchLandlords();
  }, []);

  return (
    <>
      <button
        className="mb-4 btn btn-success"
        onClick={() => {
          setIsEditing(false);
          setShowModal(true);
        }}
      >
        Agregar un nuevo propietario
      </button>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          mode={isEditing ? "Editar" : "Agregar"}
        />
      )}

      <TenantsTable
        columns={columns}
        onEdit={onEdit}
        setIsEditing={setIsEditing}
      />
    </>
  );
};

export default LandlordsPage;
