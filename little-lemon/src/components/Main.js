import React from 'react'
import "./Main.css";

export default function Main() {
  return (
      <main>
        <section className="SpecialsSection">
          <h2>This weeks sepcials!</h2>
          <button>Online Menu</button>
          <article>
            <img src={""} alt="Greek salad"></img>
            <section>
              <h3>Greed Salad</h3>
              <h4>$12,99</h4>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
              <p>Order a delivery</p>
              <img src={""} alt="delivery_icon"></img>
            </section>
          </article>
          <article>
            <img src={""} alt="Bruchetta"></img>
            <section>
              <h3>Bruchetta</h3>
              <h4>$5,99</h4>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <p>Order a delivery</p>
              <img src={""} alt="delivery_icon"></img>
            </section>
          </article>
          <article>
            <img src={""} alt="Lemon Dessert"></img>
            <section>
              <h3>Lemon Dessert</h3>
              <h4>$5,00</h4>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <p>Order a delivery</p>
              <img src={""} alt="delivery_icon"></img>
            </section>
          </article>
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
