import "./ReceiptPayment.css"

const ReceiptPayment = ({tenant}) => {

    const currentMonth = new Date().getMonth()+1;
    return(
        <div className="receipt-section">
            <div className="field">
                <p>del inmueble ubicado en: {tenant && <span>{tenant.estateAddress} - {tenant.estateCity}</span>}
                </p>
            </div>

            <div className="field">
                <p>Correspondiente al mes de </p>
                
                <select defaultValue={currentMonth} className="mt-0">
                    <option value="1">Enero</option>
                    <option value="2">Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septiembre</option>
                    <option value="10">Octumbre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>
                <p> de </p>
                <input type="number" className="no-border" style={{fontSize: '.8rem'}} defaultValue={new Date().getFullYear()}></input>
            </div>


            <div className="payment_fields">
                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Valor Locativo</p>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Aysa</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Municipal</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Expensas</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Edenor</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Gas</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p>Otros</p>
                        <input type="text" className=""></input>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>


                <div className="payment_field">
                    <div className="payment_field-left d-flex align-items-center">
                        <p className="total">TOTAL</p>
                    </div>
                    <input type="text" className="payment_field-right"></input>
                </div>

                <div className="bold_rectangle"></div>

            </div>
            <div className="payment_text">
                <p className="mt-1">Son: </p>
                <input type="text"></input>
            </div>

            <div className="d-flex align-items-center mt-3">
                <div className="sign">
                    <p>
                        Graciela Antonelli - Estudio Inmobiliario 
                    </p>
                </div>
            </div>





        </div>
    )
}

export default ReceiptPayment