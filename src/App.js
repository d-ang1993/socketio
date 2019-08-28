import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Button, Checkbox } from "./ui";
import Dashboard from "./Dashboard";
import Store from "./Store";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button>Hello</Button>
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
