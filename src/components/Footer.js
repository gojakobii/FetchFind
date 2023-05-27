import React from "react"

import FooterLogo from "../assets/FooterLogo"

function Footer( props ) {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="logo-column">
                        <FooterLogo />
                    </div>
                    <div className="links-column">
                    <ul>
                        <li><a href="/">Fetch For Business</a></li>
                        <li><a href="/">Affiliates & Business</a></li>
                        <li><a href="/">Contact Support</a></li>
                    </ul>
                    </div>
                    <div className="links-column">
                    <ul>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Frequently Asked Questions</a></li>
                        <li><a href="/">Terms of Service</a></li>
                    </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;