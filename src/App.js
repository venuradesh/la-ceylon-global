//dependencies
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import ItemSection from "./Components/ItemsSection/ItemSection";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemSection />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
