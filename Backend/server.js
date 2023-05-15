const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/DB");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(5000, console.log(`Server is running on port number : ${PORT}`));

//Ticket Routes
const ticketRoute = require("./routes/ticket.route");
app.use("/ticket", ticketRoute);