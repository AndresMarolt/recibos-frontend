import "./ReceiptTemplate.css"
import { useState } from "react"
import ReceiptHeader from "../ReceiptHeader/ReceiptHeader"
import ReceiptTenant from "../ReceiptTenant/ReceiptTenant"
import ReceiptLandlord from "../ReceiptLandlord/ReceiptLandlord"
import ReceiptPayment from "../ReceiptPayment/ReceiptPayment"
import ReceiptFooter from "../ReceiptFooter/ReceiptFooter"
import { useDispatch, useSelector } from "react-redux";
import { getTenants } from "../../../redux/actions/tenants"
import { getLandlords } from "../../../redux/actions/landlords"

const ReceiptTemplate = (category) => {

    const dispatch = useDispatch();
    
    dispatch(getTenants());
    dispatch(getLandlords());

    const [tenant, setTenant] = useState(null);

    return(
        <section className="receipt-container">
            <ReceiptHeader />

            <ReceiptTenant onSelection={setTenant}/>

            <ReceiptLandlord />

            <ReceiptPayment tenant={tenant} />

            <ReceiptFooter />
        </section>
    )
}

export default ReceiptTemplate