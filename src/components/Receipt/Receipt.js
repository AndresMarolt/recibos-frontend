import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ReceiptTemplate from "./ReceiptTemplate/ReceiptTemplate";
import { Link } from "react-router-dom";

import "./Receipt.css";

const Receipt = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const logout = () => {
    localStorage.clear("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <button onClick={handlePrint} className="btn me-2" id="print">
            Imprimir
          </button>
          <Link to="/admin/inquilinos" id="admin_btn" className="btn me-2">
            Admin
          </Link>
        </div>
        <button className="btn btn-secondary" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>

      <div ref={componentRef}>
        <ReceiptTemplate />
      </div>
    </div>
  );
};

export default Receipt;
