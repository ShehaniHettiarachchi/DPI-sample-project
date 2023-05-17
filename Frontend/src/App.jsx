import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Ticket
import Ticket from "./pages/Ticket/AddTicket";

//Product
// import Product from "./pages/Product/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
