import './ReceiptFooter.css'

const ReceiptFooter = () => {


    return (
        <div className="receipt-section footer">
            <div className='footer_ending'>
                <p>Recibido en carácter de titular del inmueble arriba indicado</p>
                <p>Fecha: ..................../..................../....................</p>
                <select>
                    <option>ORIGINAL</option>
                    <option>DUPLICADO</option>
                    <option>TRIPLICADO</option>
                </select>
            </div>

            <div className='footer_signing'>
                <div className="signing_container">
                    <p>Firma </p>
                </div>

                <div className="signing_container">
                    <p>Aclaración </p>
                </div>
            </div>

            

        </div>
    )
}

export default ReceiptFooter;