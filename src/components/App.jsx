import React from "react";
import Navbar from "./navigation";
import Grid from "./grid";
import List from "./todo";
import "../styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Grid />
              </>
            }
          />
          <Route
            path="/todo"
            element={
              <>
                <Navbar />
                <List />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
