const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({


    ticketID: {
        type: String,
        required: true,
        unique: true
    },

    ticketName: {
        type: String,
        required: true,
    },

    ticketPrice: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
        required: true,
    },
    remark: {
        type: String,
    },

});

// Export the model
const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = { Ticket };