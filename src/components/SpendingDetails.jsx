import React from 'react'
import SpendingsCard from './SpendingsCard'
import "../css/spendingDetails.css"
import phoneImg from "../img/phone.png"
function SpendingDetails() {
    return (
        <div className='spending-main'>
            <div className="phone backgroundColor">
                <img src={phoneImg} alt="phone" srcset="" />
            </div>
            <div className="spendingsCard backgroundColor">
                <SpendingsCard />
            </div>
        </div>
    )
}

export default SpendingDetails