//dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ItemSection from "./Components/ItemsSection/ItemSection";
import AdminHeader from "./Components/Admin/AdminHeader";
import AdminItems from "./Components/Admin/AdminItems";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState();
  const [adminLogged, setAdminLogged] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          {adminLogged ? (
            <Route
              exact
              path="/home/admin"
              element={
                <>
                  <AdminHeader user={user} />
                  <AdminItems />
                </>
              }
            />
          ) : (
            <></>
          )}
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

          <Route exact path="/login" element={<Login userLog={setUserLogged} user={setUser} adminLogged={setAdminLogged} />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
