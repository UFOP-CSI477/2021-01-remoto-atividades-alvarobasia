import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Registros from "./components/Registros";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Routes>
      <Route path="/about"></Route>
      <Route path="/users"></Route>
      <Route path="/" element={<Wrapper>{/* <p>llll</p> */}</Wrapper>} />
      <Route path="/login" element={<Wrapper>{/* <Login /> */}</Wrapper>} />
      <Route
        path="/register"
        element={<Wrapper>{/* <Register /> */}</Wrapper>}
      />
      <Route
        path="/types"
        element={<Wrapper>{/* <CreateTypes /> */}</Wrapper>}
      />
      <Route
        path="/regsitros"
        element={
          <Wrapper>
            <Registros />
          </Wrapper>
        }
      />
    </Routes>
  );
}

export default App;
