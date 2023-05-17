import React from "react";
import axios from "axios";
import { useState } from "react";
import { makeToast } from "../../components";
import Products from "./Products";

export default function AddProduct() {
  //Product Details
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  //Product Details
  function sendData(e) {
    // debugger
    e.preventDefault();

    const newProduct = {
      productName,
      productPrice,
    };

    axios
      .post("http://localhost:5000/product/", newProduct)
      .then(() => {
        makeToast({ type: "success", message: "Product added Successfully" });

        setProductName("");
        setProductPrice("");
      })
      .catch((error) => {
        makeToast({ type: "error", message: error });
      });
  }

  return (
    <div
      className="container"
      style={{ paddingBottom: "30px", paddingTop: "30px" }}
    >
      <div
        className="card"
        style={{
          backgroundColor: "#E3F4F4",
        }}
      >
        {/* <form> */}
          <div className="row g-3 p-6 was-validated">
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                name="productName"
                onChange={(e) => setProductName(e.target.value)}
                required
              ></input>
              <div className="valid-feedback">Valid product name</div>
              <div className="invalid-feedback">Product name is required.</div>
            </div>

            <div className="col-md-6">
              <label for="inputPrice" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                name="productPrice"
                maxLength="5"
                pattern="^[0-9]{1,5}$"
                onChange={(e) => setProductPrice(e.target.value)}
                required
              ></input>
              <div className="valid-feedback">Valid product price</div>
              <div className="invalid-feedback">Product Price is required.</div>
            </div>

            <div className="col-md-6">
              <button
                type="submit"
                className="btn ps-5 pe-5"
                style={{ backgroundColor: "#576CBC", color: "white" }}
                onClick={(e) => sendData(e)}
              >
                ADD
              </button>
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn ps-5 pe-5"
                style={{ backgroundColor: "#E21818", color: "white" }}
              >
                CLEAR
              </button>
            </div>
          </div>
          {/* Products table */}
          <Products />
          {/* Products table */}
        {/* </form> */}
      </div>
    </div>
  );
}
