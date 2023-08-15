import React from 'react'
import "./Footer.css";
import Logo from "../assets/Logo .svg";

export default function Footer() {
  return (
    <footer>
        <img src={Logo} alt="littlelemonlogo"></img>
        <p>{"© Little Lemon"}</p>
    </footer>
  )
}
