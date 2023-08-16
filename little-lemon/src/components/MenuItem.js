import React from 'react';
import "./MenuItem.css";
import DeliveryIcon from "../assets/home icon.svg";

export default function MenuItem(props) {
  return (
    <article className="MenuItem">
      <img className="MenuItemImage" src={props.image} alt={props.name}></img>
      <section>
        <div className="MenuItemHeadingWrapper">
          <h3>{props.name}</h3>
          <h4>{props.price}</h4>
        </div>
        <p className="MenuItemDescription">
          {props.description}
        </p>
        <div className="orderDeliveryWrapper">
          <p>Order a delivery</p>
          <img src={DeliveryIcon} alt="delivery_icon"></img>
        </div>
      </section>
    </article>
  );
}
