import { useState } from "react";
import './payment.css'

function Payment(){
    return(
        <>
        <div className="button-wrap">
        <button className="payment">Proceed to Payment</button>
        <button className="cancel">Cancel Order</button>
        </div>
        </>
    )
}

export default Payment