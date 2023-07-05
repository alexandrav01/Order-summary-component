import { useState } from "react";
import "./payment.css";

function Cancel () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="button-wrap">
        <button className="cancel" onClick={toggleModal}>
          Cancel Order
        </button>
        {modal &&(
            <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h3>We're sorry to see you go!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="close-modal" onClick={toggleModal}>x</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Cancel;
