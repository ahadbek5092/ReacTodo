import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteItem from "./Components/DeleteItem";

import PersonList from "./Components/PersonList";
import Post from "./Components/Post";

import PersonForm from "./Components/PersonForm";
import React, { useState } from "react";
import GetId from "./Components/GetId";

function App() {
  return (
    <div className="App">
      {/* <PersonList /> */}
      {/* <DeleteItem /> */}
      {/* <GetId /> */}
      <Post />
    </div>
  );
}

export default App;
