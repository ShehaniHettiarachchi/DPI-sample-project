const express = require("express");
const router = express.Router();
const { Ticket } = require("../models/ticket.model");

// create a new ticket
//http://localhost:5000/ticket/
router.route("/").post((req, res) => {
    const ticketID = req.body.ticketID;
    const ticketName = req.body.ticketName;
    const ticketPrice = req.body.ticketPrice;
    const productDetails = req.body.productDetails;
    const status = req.body.status;
    const remark = req.body.remark;
    
    const newTicket = new Ticket({
        ticketID,
        ticketName,
        ticketPrice,
        productDetails,
        status,
        remark,
    });
    
    newTicket
        .save()
        .then(() => {
        res.json("Ticket Added");
        })
        .catch((err) => {
        console.log(err);
        });
});

module.exports = router;