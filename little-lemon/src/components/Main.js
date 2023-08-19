import React from "react";
import "./Main.css";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.jpg";
import LemonDessert from "../assets/lemon dessert.jpg";
import RestaurantPic from "../assets/restaurant.jpg";
import OwnersPic from "../assets/Mario and Adrian b.jpg";
import MenuItem from "../components/MenuItem";
import Testimonial from "./Testimonial";

export default function Main() {
  return (
    <main>
      <div className="SpecialsSectionGrid">
        <section className="SpecialsSection">
          <div className="specialsHeadingWrapper">
            <h2 className="specialsHeadline">This weeks specials!</h2>
            <button className="orderMenuOnlineButton">Online Menu</button>
          </div>
          <div className="specialsContentWrapper">
            <MenuItem
              name="Greek salad"
              price="12.99$"
              image={GreekSalad}
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
            <MenuItem
              name="Bruchetta"
              price="5.99$"
              image={Bruchetta}
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />
            <MenuItem
              name="Lemon Dessert"
              price="5.00$"
              image={LemonDessert}
              description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
          </div>
        </section>
      </div>
      <div className="TestimonialsSectionGrid">
        <section className="TestimonialsSection">
          <h2>Testimonials</h2>
          <div className="reviewWrapper">
            <Testimonial name="Julia" review="Very tasty food :)"/>
            <Testimonial name="Markus" review="It was very good"/>
            <Testimonial name="Abdallah" review="Will definetly come back"/>
            <Testimonial name="Fatima" review="Best restaurant when it comes to fresh lemons ;)"/>
          </div>
        </section>
      </div>

      <div className="AboutSectionGrid">
        <section className="AboutSection">
          <div className="aboutWrapper">
            <article>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
              </p>
            </article>
            <div className="aboutImageWrapper">
              <img
                className="RestaurantPic"
                src={RestaurantPic}
                alt="Little Lemon Restaurant View"
              ></img>
              <img
                className="OwnersPic"
                src={OwnersPic}
                alt="The Restaurant owners"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
