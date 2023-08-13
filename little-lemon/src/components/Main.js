import React from 'react'
import "./Main.css";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import DeliveryIcon from "../assets/home icon.svg"

export default function Main() {
  return (
      <main>
      <section className="SpecialsSection">
        <div className="specialsHeadingWrapper">
          <h2 className="specialsHeadline">This weeks sepcials!</h2>
          <button className="orderMenuOnlineButton">Online Menu</button>
        </div>
        <div className="specialsContentWrapper">
          <article className="GreekSalad">
            <img src={GreekSalad} alt="Greek salad"></img>
            <section>
              <div>
                <h3>Greed Salad</h3>
                <h4>$12,99</h4>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <div className="orderDelivery">
                <p>Order a delivery</p>
                <img src={DeliveryIcon} alt="delivery_icon"></img>
              </div>
            </section>
          </article>
          <article className="Bruchetta">
            <img src={Bruchetta} alt="Bruchetta"></img>
            <section>
              <div>
                <h3>Bruchetta</h3>
                <h4>$5,99</h4>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <div className="orderDelivery">
              <p>Order a delivery</p>
                <img src={DeliveryIcon} alt="delivery_icon"></img>
              </div>
            </section>
          </article>
          <article className="LemonDessert">
            <img src={LemonDessert} alt="Lemon Dessert"></img>
            <section>
              <div>
                <h3>Lemon Dessert</h3>
              <h4>$5,00</h4>
             </div>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <div className="orderDelivery">
                <p>Order a delivery</p>
                <img src={DeliveryIcon} alt="delivery_icon"></img>
              </div>
            </section>
          </article>
        </div>
        </section>
        <section className="TestimonialsSection">
          <h2>Testimonials</h2>
          <article>
            <p>Raing: </p> <img src={""} alt="rating_stars"></img>
            <img src={""} alt="profilePicture"></img>
            <p>{"Review text"}</p>
          </article>
          <article>
            <p>Raing: </p> <img src={""} alt="rating_stars"></img>
            <img src={""} alt="profilePicture"></img>
            <p>{"Review text"}</p>
          </article>
          <article>
            <p>Raing: </p> <img src={""} alt="rating_stars"></img>
            <img src={""} alt="Portrait of Reviewer"></img>
            <p>{"Review text"}</p>
          </article>
          <article>
            <p>Raing: </p> <img src={""} alt="rating_stars"></img>
            <img src={""} alt="Portrait of Reviewer"></img>
            <p>{"Review text"}</p>
          </article>
          <article>
            <p>Raing: </p> <img src={""} alt="rating_stars"></img>
            <img src={""} alt="Portrait of Reviewer"></img>
            <p>{"Review text"}</p>
          </article>
        </section>
        <section className="AboutSection">
          <article>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
          </article>
          <img src={""} alt="Little Lemon Restaurant Voew"></img>
          <img src={""} alt="The Restaurant owners"></img>
        </section>
      </main>
  )
}
