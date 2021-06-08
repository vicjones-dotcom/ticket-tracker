import React, { Component, useState } from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { id, name, role } = props.team;
  const [ticketCount, updateTicketCount] = useState(0);

  const addTicket = () => {
    const newTicket = ticketCount + 1;
    updateTicketCount(newTicket);
  };
  const subtractTicket = () => {
    const takeAwayTicket = ticketCount - 1;
    updateTicketCount(takeAwayTicket);
    if (ticketCount <= 0) {
      alert("You cannot subtract!");
    }
  };

  return (
    <div className="Card">
      <h2>Name: {name}</h2>
      <h2>Role: {role}</h2>
      {/* <h2>{id}</h2> */}
      <h3>{ticketCount}</h3>
      <button onClick={addTicket}>Add</button>
      <button onClick={subtractTicket}>Subtract</button>
    </div>
  );
};

export default ProfileCard;
