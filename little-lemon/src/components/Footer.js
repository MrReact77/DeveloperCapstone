import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo .svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="FooterContent">
          <img src={Logo} alt="LittleLemonLogo"></img>
          <div className="FooterLinksWrapper">
            <div className="DoormatNavigation">
              <p>Little Lemon</p>
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
              El-Deyry. Don't clain as your own. Test
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
