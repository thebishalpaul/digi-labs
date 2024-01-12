import React from 'react'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import "../css/customersupport.css"
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
function CustomerSupport() {
    return (
        <div className='cs-main'>
            <h1>
                Unlock Limitless Possibilities with <br />Our New Card Solutions
            </h1>
            <div className="buttons">
                <button type="button">Unlock your Card  <CreditCardOutlinedIcon
                    sx={{ marginLeft: "0.5rem" }}
                />
                </button>
                <button className='lightFontColor'>
                    Customer support
                    <HeadphonesOutlinedIcon
                        sx={{ marginLeft: "0.5rem" }}
                    />
                </button>
            </div>
        </div>
    )
}

export default CustomerSupport