import React from 'react'
import "./Footer.css";
import Logo from "../assets/Logo .svg";

export default function Footer() {
  return (
    <footer>
      <div className="FooterContent">
        <img src={Logo} alt="LittleLemonLogo"></img>
        <div className="FooterLinksWrapper">
          <div className="DoormatNavigation">
            <p>Doormat Navigation</p>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/menu">
              <p>menu</p>
            </a>
            <a href="/reservations">
              <p>Reservations</p>
            </a>
            <a href="/order-online">
              <p>Order Online</p>
            </a>
            <a href="/login">
              <p>Login</p>
            </a>
          </div>
          <div className="Contact">
            <p>Contact</p>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/about">
              <p>Adress</p>
            </a>
            <a href="/menu">
              <p>phone number</p>
            </a>
            <a href="/reservations">
              <p>email</p>
            </a>
          </div>
          <div className="SocialMediaLinks">
            <p>Social Media Links</p>
            <a href="/adress">
              <p>Adress</p>
            </a>
            <a href="/phonenumber">
              <p>phone number</p>
            </a>
            <a href="/email">
              <p>email</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
