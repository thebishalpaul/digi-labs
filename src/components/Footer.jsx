import React from 'react'
import "../css/footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import discord from "../img/discord.png"
function Footer() {
    return (
        <>
            <div className='footerMain'>
                <div className='footer'>
                    <h4>Company</h4>
                    <div>
                        <a href="/">About us</a>
                        <a href="/">Pricing</a>
                        <a href="/">Contact us</a>
                        <a href="/">Features</a>
                    </div>
                </div>
                <div className='footer'>
                    <h4>Product</h4>
                    <div>
                        <a href="/">About us</a>
                        <a href="/">Pricing</a>
                        <a href="/">Contact us</a>
                        <a href="/">Features</a>
                    </div>
                </div>
                <div className='footer'>
                    <h4>Resources</h4>
                    <div>
                        <a href="/">About us</a>
                        <a href="/">Pricing</a>
                        <a href="/">Contact us</a>
                        <a href="/">Features</a>
                    </div>
                </div>
                <div className='footer'>
                    <h4>Legal</h4>
                    <div>
                        <a href="/">About us</a>
                        <a href="/">Pricing</a>
                        <a href="/">Contact us</a>
                        <a href="/">Features</a>
                    </div>
                </div>
                <div className='footer'>
                    <h4>Support</h4>
                    <div>
                        <a href="/">About us</a>
                        <a href="/">Pricing</a>
                        <a href="/">Contact us</a>
                        <a href="/">Features</a>
                    </div>
                </div>

            </div>
            <div className="footer2">
                <a href="/">
                    <GitHubIcon
                        sx={{ height: "30px" }}
                    />
                </a>
                <a href="/">
                    <LinkedInIcon
                        sx={{ height: "30px" }}
                    />
                </a>
                <a href="/">
                    <img src={discord} alt="" srcset=""
                        style={{
                            height: "30px"
                        }}
                    />
                </a>
            </div>
            <div className="lightFontColor copyright">
                © 2023 Mode UI Inc. All Rights Reserved.
            </div>
        </>
    )
}

export default Footer