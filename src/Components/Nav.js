import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingBasket } from 'react-icons/fa';
import Logo from "../images/LogoNew.jpg";
import { Link } from 'react-router-dom';



const Nav = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (

        <>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <img src={Logo} alt="Little Lemon" className="logo" />
            <div className="basket">
                <FaShoppingBasket />
            </div>
            <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
                {/* <ul className="nav-list">
                    <li> <a href="#home" onClick={handleClick}  >Home</a></li>
                    <li>  <a href="#about" onClick={handleClick}>About</a></li>
                    <li> <a href="#menu" onClick={handleClick}>Menu</a></li>
                    <li> <a href="">Reservations</a></li>
                    <li> <a href="">Order Online</a></li>
                    <li> <a href="">Login</a></li>
                </ul> */}
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

        </>
    )
}
export default Nav;