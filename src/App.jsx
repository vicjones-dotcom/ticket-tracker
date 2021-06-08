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
      <h1>Ticket Counter</h1>
      {teams.map(getProfile)}
    </div>
  );
}

export default App;
