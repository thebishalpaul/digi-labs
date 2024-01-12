import React from 'react'
import "../css/review.css"
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function Review() {
    return (
        <div className='review-main'>
            <img className='wise-logo' src="https://brandlogos.net/wp-content/uploads/2023/08/wise-logo_2023-brandlogos.net_5ynjd.png" alt="wise-logo" srcset="" />
            <p className="customer-review">
                I had the pleasure of experiencing the next generation of cut solutions with this incredible product is refreshing to see such innovation in the financial industry
            </p>
            <div className="customerDetails">
                <Avatar sx={{ width: 56, height: 56, marginBottom: "0.8rem" }} alt="Remy Sharp" src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=900&t=st=1705005002~exp=1705005602~hmac=7fbf935f3d5260eb5f23618bcb78801c87762077d4d55f5ff024d01dd89de2ff" />

                <h3>Bishal Paul</h3>
                <p className="designation lightFontColor">
                    Software Engineer
                </p>
                <Rating name="read-only" value={4} readOnly max={4} />
            </div>
        </div>
    )
}

export default Review