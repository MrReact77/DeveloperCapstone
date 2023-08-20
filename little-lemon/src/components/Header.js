import React from "react";
import "./Header.css";
import restaurantfood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="HeaderContentGrid" data-testid="HeaderContentGrid">
        <div className="HeaderContent">
          <article className="headerArticle">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations">
              <button className="reserveTableButton" data-testid="reserveTableButton">Reserve a Table</button>
            </Link>
          </article>
          <div className="imageWrapper">
            <img
              loading="lazy"
              src={restaurantfood}
              className="mediterranianSeaFoodPic"
              alt="Presentation of mediterrainian Sea food on a plate"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
}
