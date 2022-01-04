import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import CreateTypes from "./pages/CreateTypes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Types from "./pages/Types";

function App() {
  return (
    <Routes>
      <Route path="/about"></Route>
      <Route path="/users"></Route>
      <Route
        path="/"
        element={
          <Wrapper>
            <p>llll</p>
          </Wrapper>
        }
      />
      <Route
        path="/login"
        element={
          <Wrapper>
            <Login />
          </Wrapper>
        }
      />
      <Route
        path="/register"
        element={
          <Wrapper>
            <Register />
          </Wrapper>
        }
      />
      <Route
        path="/types"
        element={
          <Wrapper>
            <CreateTypes />
          </Wrapper>
        }
      />
      <Route
        path="/types/list"
        element={
          <Wrapper>
            <Types />
          </Wrapper>
        }
      />
    </Routes>
  );
}

export default App;
