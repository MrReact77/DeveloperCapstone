import React, { useState } from "react";
import "./TableReservation.css";
import RestaurantPic from "../assets/restaurant.jpg";

export default function TableReservation() {
  const [userData, setUserData] = useState({
    date: "",
    time: "",
    occasion: "",
    guestnumber: 0,
    name: "",
    email: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="TableReservationGrid">
      <div className="TableReservationHeadingRow">
        <div className="TableReservationHeadingContent">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <img src={RestaurantPic} alt="RestaurantPic"></img>
        </div>
      </div>
      <div className="TableReservationMainRow">
        <div className="TableReservationMainContent">
          {confirmed ? (
            <h4 className="confirmedHeading">
              Your Reservation has been completed!
            </h4>
          ) : (
            <h2>Reserve a Table for any occasion</h2>
          )}
          {confirmed ? (
            <div className="ConfirmedDataWrapper">
              <h2>Your submitted data is: </h2>
              <div className="ConfirmedData">
                {Object.keys(userData).map((key) => (
                  <div key={key}>
                    <strong>{key}:</strong> {userData[key].toString()}
                  </div>
                ))}
              </div>
              <div className="ConfirmationInfoTextWrapper">
                <h4>
                  We will shortly also send you a confirmation via email.
                </h4>
                <h4> {`We are happy to welcome you soon :)`}</h4>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reserveTableForm">
              <label for="pickdate">Pick a date:</label>
              <input
                required
                onChange={(e) => {
                  setUserData({ ...userData, date: e.target.value });
                }}
                type="date"
                id="pickdate"
                name="trip-start"
                value={userData.date}
                min={new Date().toISOString().split("T")[0]}
                max="2024-12-31"
              />

              <label for="username">Enter your name: </label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
                value={userData.name}
                required
              ></input>

              <label for="timeselect">Pick a time: </label>
              <select
                name="times"
                id="timeselect"
                required
                onChange={(e) => {
                  setUserData({ ...userData, time: e.target.value });
                }}
                value={userData.time}
              >
                <option value="">Select a time</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
              </select>

              <label for="guestnumberselect">Pick the number of guests: </label>
              <input
                required
                onChange={(e) => {
                  setUserData({ ...userData, guestnumber: e.target.value });
                }}
                type="number"
                id="guestnumberselect"
                max={20}
                min={1}
                placeholder="1-20"
              ></input>

              <label for="occasionselect">Pick an occasion: </label>
              <select
                name="occasion"
                id="occasionselect"
                required
                onChange={(e) => {
                  setUserData({ ...userData, occasion: e.target.value });
                }}
                value={userData.occasion}
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Date">Date</option>
                <option value="Casual">Casual</option>
                <option value="Business">Business</option>
              </select>

              <label for="guestnumberselect">Provide your email adress: </label>
              <input
                required
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                type="email"
                id="guestnumberselect"
                placeholder="m.mustermann@gmail.com"
              ></input>

              <div className="buttonWrapper">
                <button type="submit" className="submitbutton">
                  Make your Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
