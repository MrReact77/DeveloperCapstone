import React, { useState } from 'react';
import "./Nav.css";
import logo from '../assets/Logo.svg';
import HamburgerButton from '../assets/Hamburger_icon.svg.png';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <nav>
      <img src={logo} alt="logo"/>
      <ul className={"NavUl"}>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
      </ul>
      <div className="LoginSignupWrapper">
        <a href="/login">Login</a>
        <a href="/signup">Sign up</a>
      </div>
      <a id="burgerButton" className="toggleButton" onClick={toggleDropdown}>
        <img src={HamburgerButton} alt="burger_button_toggler"/>
      </a>
      </nav>
      <ul className={`NavUlDropdown ${isOpen ? 'show' : ''}`}>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign up</a></li>
      </ul>
    </>
  )
}

