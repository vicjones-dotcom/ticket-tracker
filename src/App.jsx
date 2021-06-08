import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import teams from "./data/teams";

import ProfileCard from "./components/ProfileCard";

function App() {
  // const getProfile = teams.map((team) => {
  //   return <ProfileCard />;
  // });

  const getProfile = (team) =>(
    <div>
      <ProfileCard  key={team.id} team={team} />
    </div>
  )

  return (
    <div className="App">
      <h1 className="ticketTitle">Ticket Counter</h1>
      <div className="CardTicketTable">
      {teams.map(getProfile)}
      </div>
    </div>
  );
}

export default App;
