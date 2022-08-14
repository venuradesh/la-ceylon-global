//dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ItemSection from "./Components/ItemsSection/ItemSection";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState();

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          {userLogged ? (
            <Route
              exact
              path="/home/:userId"
              element={
                <>
                  <Header user={user} />
                  <ItemSection />
                </>
              }
            ></Route>
          ) : (
            <></>
          )}
          <Route exact path="/login" element={<Login userLog={setUserLogged} user={setUser} />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
