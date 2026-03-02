import "./ReceiptLandlord.css";
import "../ReceiptTenant/ReceiptTenant.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const ReceiptLandlord = () => {
  const data = useSelector((state) => state.landlords.landlords);
  const [selectedLandlord, setSelectedLandlord] = useState(null);

  const handleChange = (e) => {
    const selected = data.find((land) => land.fullName === e.target.value);
    setSelectedLandlord(selected);
  };

  return (
    <div className="receipt-section tenant">
      <div className="field">
        <p>Recibido en concepto de alquiler por:</p>
        <select onChange={handleChange}>
          <option></option>
          {data.map((landlord) => (
            <option key={landlord._id} value={landlord.fullName}>
              {landlord.fullName}
            </option>
          ))}
        </select>
      </div>

      <div className="field_container">
        <div className="field field-long">
          <p>Domicilio:</p>
          <p>{selectedLandlord ? selectedLandlord.address : ""}</p>
        </div>

        <div className="field field-short">
          <p>Localidad:</p>
          <p>{selectedLandlord ? selectedLandlord.city : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptLandlord;
