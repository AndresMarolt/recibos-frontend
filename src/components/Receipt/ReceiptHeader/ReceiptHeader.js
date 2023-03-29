import './ReceiptHeader.css'

const ReceiptHeader = () => {

    return(
        <div className="receipt-section header">
            <div className="header_first">
                <img src="./img/1675190635144blob.jpg" alt="LOGO" />

                <div>
                    <p>Humboldt 997 - Ramos Mejía</p>
                    <p>(1704) - Prov. de Buenos Aires</p>
                    <p>Tel: 4654-1782</p>
                    <br />
                    <p className='text_small'>IVA RESPONSABLE MONOTRIBUTO</p>
                </div>
            </div>

            <div className="header_middle">
                <p className='receipt-class'>X</p>
                <p className='text_small'>DOCUMENTO NO VALIDO COMO FACTURA</p>
            </div>

            <div className="header_last">
                <p className='text_bold'>RECIBO POR CUENTA Y ORDEN DE TERCEROS</p>
                <div className='d-flex align-items-center justify-content-center gap-1'>
                    <p>N° </p>
                    <input type={"number"} className="border-0 receipt_number"></input>
                </div>
                <p>Fecha: &nbsp;
                    <input className='border-0 text-right' style={{width: '6%'}} defaultValue={new Date().getDate()}/> /
                    <input className='border-0 text-center' style={{width: '6%'}} defaultValue={new Date().getMonth()+1}/> /
                    <input className='border-0 text-left' style={{width: '13%'}} defaultValue={new Date().getFullYear()}/>

                </p>
                <br/>
                <div className='header_last_info text_small'>
                    <p>CUIT: 27-13846955-2</p>
                    <p>Inrgesos Brutos: 27-13846955-2</p>
                    <p>Inicio de Actividades: 1/11/2010</p>
                    <p>Caja Prev. Soc. P/Martilleros y Corredor Público Bs. As. N° 30774</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default ReceiptHeader;