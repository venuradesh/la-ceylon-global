//dependencies
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ItemSection from "./Components/ItemsSection/ItemSection";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <ItemSection />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
