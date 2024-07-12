import Logo from "../images/Copyright-logo.png"
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <img src={Logo} alt="" width={100} />
                    <div>
                        <h4>Doormat navigation</h4>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Menu</a>
                            </li>
                            <li>
                                <a href="">Reservation</a>
                            </li>
                            <li>
                                <a href="">Order Online</a>
                            </li>
                            <li>
                                <a href="">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">Phone Number</a>
                            </li>
                            <li>
                                <a href="">Email</a>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">Phone Number</a>
                            </li>
                            <li>
                                <a href="">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;