import { useState } from "react";
import { useSelector } from "react-redux";
import "./ReceiptTenant.css"

const ReceiptTenant = ({onSelection}) => {
    

    const data = useSelector(state => state.tenants.tenants);
    const [selectedTenant, setSelectedTenant] = useState(null);

    const handleChange = (e) => {
        const selected = data.find(ten => ten.fullName === e.target.value)
        setSelectedTenant(selected);
        onSelection(selected);
    }

    return(
        <div className="receipt-section tenant">
            <div className="field">
                <p>Señor/a:</p>

                <select onChange={handleChange}>
                    <option></option>
                    {
                        data.map((tenant) => <option key={tenant._id} value={tenant.fullName}>{tenant.fullName}</option>)
                    }
                </select>
            </div>

            <div className="field_container">
                <div className="field field-long">
                    <p>Domicilio:</p>
                    <p>{selectedTenant ? selectedTenant.address : ""}</p>
                </div>

                <div className="field field-short">
                    <p>Localidad:</p>
                    <p>{selectedTenant ? selectedTenant.city : ""}</p>
                </div>
            </div>


        </div>
    )
}

export default ReceiptTenant;