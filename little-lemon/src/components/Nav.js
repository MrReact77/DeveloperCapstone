import React from 'react';
import "./Nav.css";
import logo from '../assets/Logo.svg';

export default function Nav() {
  return (
    <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
            </ul>
        <div>
          <a href="/login">Login</a>
          <a href="/signup">Sign up</a>
        </div>
    </nav>
  )
}
