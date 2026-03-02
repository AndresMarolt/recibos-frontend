import "./ReceiptFooter.css";

const ReceiptFooter = () => {
  return (
    <div className="receipt-section footer">
      <div className="footer_ending">
        <p>
          Fecha: &nbsp;
          <input
            className="border-0 text-right"
            style={{ width: "6%", textAlign: "right" }}
            defaultValue={new Date().getDate()}
          />{" "}
          /
          <input
            className="border-0 text-center"
            style={{ width: "6%" }}
            defaultValue={new Date().getMonth() + 1}
          />{" "}
          /
          <input
            className="border-0 text-left"
            style={{ width: "13%" }}
            defaultValue={new Date().getFullYear()}
          />
        </p>
      </div>

      <div className="footer_signing">
        <div className="signing_container">
          <p>Firma del locador</p>
        </div>

        <div className="signing_container">
          <p>Aclaración </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptFooter;
