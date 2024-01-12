import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "../css/features.css"
function Features() {
    return (
        <div className='featureContainer'>
            <div className="feature">
                <div className="iconBg">
                    <LanguageIcon className='icon purple' sx={{ fontSize: "30px" }} />
                </div>
                <h4>Globally Accepted</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit suscipit!
                </p>
            </div>
            <div className="feature">
                <div className="iconBg">
                    <VpnKeyOutlinedIcon className='purple logoBackground'
                        sx={{ fontSize: "30px" }}
                    />
                </div>
                <h4>Biometric Integrated</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit suscipit!
                </p>
            </div>
            <div className="feature">
                <div className="iconBg">
                    <LockOutlinedIcon className='purple' sx={{ fontSize: "30px" }} />
                </div>
                <h4>Fully Secured</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit suscipit!
                </p>
            </div>
        </div>
    )
}

export default Features