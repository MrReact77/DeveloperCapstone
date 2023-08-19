import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo .svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="FooterContent">
          <img src={Logo} alt="LittleLemonLogo"></img>
          <div className="FooterLinksWrapper">
            <div className="DoormatNavigation">
              <p>Little Lemon</p>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
              <Link to="/menu">
                <p>menu</p>
              </Link>
              <Link to="/reservations">
                <p>Reservations</p>
              </Link>
              <Link to="/order-online">
                <p>Order Online</p>
              </Link>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
            <div className="Contact">
              <p>Contact</p>
              <p className="ContactInfos">
                Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois
                60602 USA
                <br /> test@test.de <br />
                (3111) 555-23698
              </p>
            </div>
            <div className="SocialMediaLinks">
              <p>Social Media Links</p>
              <a href="/adress">
                <p>Instagram</p>
              </a>
              <a href="/phonenumber">
                <p>Facebook</p>
              </a>
            </div>
            <p className="Copyright">
              © Copyright 2023 This is a showcase web app made by Karim
              El-Deyry. Don't clain as your own.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
