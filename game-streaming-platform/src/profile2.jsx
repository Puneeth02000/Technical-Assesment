import React from "react";

const Profile = ({ user }) => (
  <div>
    <h3 style={{ color: "Black", fontSize: "20px" }}>Users list</h3>
    <h1 style={{ color: "green" }}>1.{user.name}</h1>
    <p>Bio: {user.bio}</p>
    <p style={{ background: "Yellow" }}>{"Games, Education"}</p>
    <h1>2.{user.name}</h1>
    <p>Bio: {user.bio}</p>
    <p style={{ background: "Yellow" }}>{"Memes, Dance, Music"}</p>
    <h1>3.{user.name}</h1>
    <p>Bio: {user.bio}</p>
    <p style={{ background: "Yellow" }}>{"Cricket, Designer, eSports"}</p>
    <h1>4.{user.name}</h1>
    <p>Bio: {user.bio}</p>
    <p style={{ background: "Yellow" }}>{"Memes, Designer, Music"}</p>
  </div>
);

export default Profile;
