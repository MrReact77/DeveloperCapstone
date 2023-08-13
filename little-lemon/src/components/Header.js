import React from 'react';
import "./Header.css";
import restaurantfood from "../assets/restauranfood.jpg"

export default function Header() {
  return (
      <header>
          <article className="headerArticle">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="reserveTableButton">Reserve a table</button>
      </article>
      <div className="imageWrapper">
        <img src={restaurantfood} className="mediterranianSeaFoodPic" alt="Presentation of mediterrainian Sea food on a plate"></img>
      </div>
      </header>
  )
}
