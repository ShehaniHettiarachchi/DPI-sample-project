const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model");

// create a new product
//http://localhost:5000/product/
router.route("/").post((req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;

    const newProduct = new Product({
        productName,
        productPrice,
    });
    
    newProduct
        .save()
        .then(() => {
        res.json("Product Added");
        })
        .catch((err) => {
        console.log(err);
        });
});

// get all products
//http://localhost:5000/product/
router.route("/").get((req, res) => {
    Product.find()
        .then((products) => {
        res.json(products);
        })
        .catch((err) => {
        console.log(err);
    });
});

// update a product
//http://localhost:5000/product/:id
router.route("/:id").put(async (req, res) => {
    let productID = req.params.id;

    const { productName, productPrice } = req.body;

    const updateProduct = {
        productName,
        productPrice
    };

    const update = await Product.findByIdAndUpdate(productID, updateProduct)
        .then(() => {
            res.status(200).send({ status: "Product updated" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating product", error: err.message 
        });
    });
});

// delete a product
//http://localhost:5000/product/:id
router.route("/:id").delete(async (req, res) => {
    let productID = req.params.id;

    await Product.findByIdAndDelete(productID)
        .then(() => {
            res.status(200).send({ status: "Product deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete product", error: err.message });
        });
});

module.exports = router;
