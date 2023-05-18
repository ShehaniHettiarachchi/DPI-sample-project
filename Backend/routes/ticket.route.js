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

// Get all tickets
//http://localhost:5000/ticket/
router.get('/', async (req, res) => {
    try {
      const tickets = await Ticket.find();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Update product details
//http://localhost:5000/ticket/5f9b3b3b7d9b3a1f0c8b3b3a/product/5f9b3b3b7d9b3a1f0c8b3b3b
router.put('/ticket/:id/product/:productId', async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
  
      const product = ticket.productDetails.id(req.params.productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      product.productName = req.body.productName;
      product.productPrice = req.body.productPrice;
  
      await ticket.save();
      res.json('Product details updated successfully');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Delete product details
  //http://localhost:5000/ticket/5f9b3b3b7d9b3a1f0c8b3b3a/product/5f9b3b3b7d9b3a1f0c8b3b3b
  router.delete('/ticket/:id/product/:productId', async (req, res) => {
    try {
      const ticketId = req.params.id;
      const productId = req.params.productId;
  
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
  
      const product = ticket.productDetails.id(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      ticket.productDetails.pull(product);
      await ticket.save();
  
      res.json({ status: 'Product deleted' });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: 'Error with deleting product', error: err.message });
    }
  });

  // Get all product details of a ticket
  // http://localhost:5000/ticket/ticket/5f9b3b3b7d9b3a1f0c8b3b3a/products
  router.get('/ticket/:id/products', async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (ticket) {
        res.json(ticket.productDetails);
      } else {
        res.status(404).json({ error: 'Ticket not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  

module.exports = router;