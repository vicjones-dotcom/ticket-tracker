import React, { Component } from "react";
import styles from "./";

const ProfileCard = (props) => {
  const { id, name, role } = props.team;

  return (
    <div className="Card">
      <h2>{name}text</h2>
      <h1>{role}</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default ProfileCard;
