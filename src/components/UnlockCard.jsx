import React from 'react'
import "../css/unlockcard.css"
import "../css/global.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function UnlockCard() {
    return (
        <>
            <div className='main alignHeader background'>
                <h4 className='purple'>Seamless experience</h4>
                <h1>
                    Unleashing the Next <br />Generation of Card <br /> Solutions
                </h1>
                <p className='lightFontColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt fugit accusantium quas repellat itaque id maiores deleniti alias.</p>

                <button type="button">Unlock your Card <ArrowForwardIcon sx={{ paddingLeft: "5px" }} /></button>

            </div>
            <p className='lightFontColor unlockfooter'>*No credit card required</p>
        </>
    )
}

export default UnlockCard