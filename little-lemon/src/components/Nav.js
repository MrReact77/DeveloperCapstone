import React, { useState } from 'react';
import "./Nav.css";
import logo from '../assets/Logo.svg';
import HamburgerButton from '../assets/Hamburger_icon.svg.png';
import CloseIcon from "../assets/icons8-löschen-50.png"
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul className={"NavUl"}>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations">
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-online">
              Order Online
            </NavLink>
          </li>
        </ul>
        <div className="LoginSignupWrapper">
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/signup">
            Sign up
          </NavLink>
        </div>
        {isOpen ? (
          <a
            id="burgerButton"
            className="toggleButton"
            onClick={toggleDropdown}
          >
            <img src={CloseIcon} alt="burger_button_toggler" />
          </a>
        ) : (
          <a
            id="burgerButton"
            className="toggleButton"
            onClick={toggleDropdown}
          >
            <img src={HamburgerButton} alt="burger_button_toggler" />
          </a>
        )}
      </nav>
      <ul className={`NavUlDropdown ${isOpen ? "show" : ""}`}>
        <li onClick={toggleDropdown}>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/menu">
            Menu
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/reservations">
            Reservations
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/order-online">
            Order Online
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
        <li onClick={toggleDropdown}>
          <NavLink to="/signup">
            Sign up
          </NavLink>
        </li>
      </ul>
    </>
  );
}

