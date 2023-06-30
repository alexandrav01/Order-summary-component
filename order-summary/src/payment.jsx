import { useState } from "react";
import "./payment.css";

function Payment() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="button-wrap">
        <button className="payment" onClick={toggleModal}>
          Proceed to Payment
        </button>
        {modal &&(
            <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h3>Thank you for your purchase</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="close-modal" onClick={toggleModal}>x</button>
            </div>
          </div>
        </div>
        )}

        <button className="cancel">Cancel Order</button>
      </div>
    </>
  );
}

export default Payment;
