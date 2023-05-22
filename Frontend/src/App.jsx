import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Ticket
import AddTicket from "./pages/Ticket/AddTicket";
import Ticket from "./pages/Ticket/Ticket";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ticket Routes */}
        <Route path="/" element={<Ticket />} />
        <Route path="/ticket/:id" element={<AddTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
