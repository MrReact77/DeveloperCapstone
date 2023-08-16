import React from 'react';
import "./Testimonial.css";
import RatingIcon from "../assets/5 star icon.png";
import CustomerIcon from "../assets/customer icon.png";

export default function Testimonial(props) {
  return (
    <article className="TestimonialElement">
      <img className="ratingImage" src={RatingIcon} alt="rating_stars"></img>
      <div className="reviewerWrapper">
        <img
          className="customerImage"
          src={CustomerIcon}
          alt="Portrait of Reviewer"
        ></img>
        <p>{props.name}</p>
      </div>
          <p className="ReviewText">{`"${props.review}"`}</p>
    </article>
  );
}
