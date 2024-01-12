import React from 'react'
import "../css/secondCard.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SecondCard() {
    return (
        <div className='secondCardContainer alignHeader'>
            <h1>
                Elevating Card Programs with <br />Cutting-Edge Technology
            </h1>
            <p className='lightFontColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt fugit accusantium quas repellat itaque id maiores.</p>

            <h4 className='purple compareDiv'>Compare all Pro feature <ArrowForwardIcon sx={{ paddingLeft: "5px" }} /></h4>
        </div>
    )
}

export default SecondCard