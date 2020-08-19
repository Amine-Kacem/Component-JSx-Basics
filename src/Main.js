import React from "react";
import Address from "./profile/Address";
import ProfilPhoto from "./profile/ProfilPhoto.js";
import FullName from "./profile/FullName";
import "./App.css";

function Main() {
  return (
    <div className="App">
      <Address />
      <FullName />
      <ProfilPhoto />
    </div>
  );
}

export default Main;
