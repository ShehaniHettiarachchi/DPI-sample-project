import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { makeToast } from "../../components/index";

const TicketForm = () => {
  const options = ["Active", "Inactive"];

  const params = useParams();
  const tID = params.id;
  const navigate = useNavigate();

  const [ticketID, setTicketID] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0); // Initialize ticket price as 0
  const [productDetails, setProductDetails] = useState([]);
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");

  // Calculate ticket price based on product prices
  useEffect(() => {
    const calculateTicketPrice = () => {
      let total = 0;
      productDetails.forEach((product) => {
        total += parseFloat(product.productPrice);
      });
      setTicketPrice(total);
    };

    calculateTicketPrice();
  }, [productDetails]);

  // Load product details for a ticket
  const loadProductDetails = async (ticketId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/ticket/${ticketId}/products`
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Add a product
  const addProduct = () => {
    const newProduct = {
      productName: "",
      productPrice: "",
    };
    setProductDetails([...productDetails, newProduct]);
  };

  // Update product details
  const updateProduct = (index, field, value) => {
    const updatedProductDetails = [...productDetails];
    updatedProductDetails[index][field] = value;
    setProductDetails(updatedProductDetails);
  };

  // Delete product
  const deleteProduct = (index) => {
    const updatedProductDetails = [...productDetails];
    updatedProductDetails.splice(index, 1);
    setProductDetails(updatedProductDetails);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save product details to local storage

    const newTicket = {
      ticketID: tID,
      ticketName: ticketName,
      ticketPrice: ticketPrice,
      productDetails: productDetails,
      status: status,
      remark: remark,
    };

    try {
      const response = await axios.post("http://localhost:5000/ticket/", newTicket); // Save ticket details to database
      console.log(response.data);
      // Clear form fields and product details
      setTicketID("");
      setTicketName("");
      setTicketPrice("");
      setProductDetails([]);
      setStatus("");
      setRemark("");

      makeToast({ type: "success", message: "Ticket Added Successfully" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load product details when ticketID changes
    if (ticketID) {
      loadProductDetails(ticketID);
    }
  }, [ticketID]);

  return (
    <div>
      <div
        className="container"
        style={{ paddingBottom: "150px", paddingTop: "30px" }}
      >
        <div
          className="card"
          style={{
            borderBlockStartColor: "#205E61",
            borderBlockStartWidth: "10px",
          }}
        >
          <div className="card-header">
            <h3
              style={{
                color: "#205E61",
                fontFamily: "Abril Fatface",
                fontWeight: "bold",
              }}
            >
              Add Ticket Details
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3 p-6 was-validated">
              <div className="col-md-6">
                <label>Ticket ID:</label>
                <input
                  type="text"
                  id="ticketID"
                  className="form-control"
                  name={ticketID}
                  placeholder="ex : 000"
                  pattern="^[0-9]{1,3}$"
                  maxLength="3"
                  value={ticketID}
                  required
                />
                <div className="valid-feedback">Valid Ticket ID</div>
                <div className="invalid-feedback">
                  Ticket ID is required & All characters should be numbers (ex:
                  000).
                </div>
              </div>
              <div className="col-md-6">
                <label>Ticket Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketName"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  required
                />
                <div className="valid-feedback">Valid Ticket Name</div>
                <div className="invalid-feedback">Ticket Name is required</div>
              </div>
              <div className="col-md-6">
                <label>Ticket Price:</label>
                <input
                  type="number"
                  className="form-control"
                  name="ticketPrice"
                  maxLength="5"
                  value={ticketPrice}
                />
                <div className="valid-feedback">Valid ticket price</div>
                <div className="invalid-feedback">
                  Ticket Price is required.
                </div>
              </div>
              <div className="col-md-6">
                <label>Status:</label>
                <select
                  className="form-select"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product details */}
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
                  <div className="row g-3 p-6 was-validated">
                    <h4
                      style={{
                        color: "#205E61",
                        fontFamily: "Abril Fatface",
                        fontWeight: "bold",
                      }}
                    >
                      Product Details
                    </h4>
                    <div className="md-6">
                      <button
                        type="button"
                        className="btn ps-3 pe-3"
                        style={{ backgroundColor: "#146C94", color: "white" }}
                        onClick={addProduct}
                      >
                        Add Product
                      </button>
                    </div>
                    <div className="pt-5">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>PRODUCT NAME</th>
                            <th>PRODUCT PRICE</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productDetails.map((product, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={product.productName}
                                  onChange={(e) =>
                                    updateProduct(
                                      index,
                                      "productName",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={product.productPrice}
                                  onChange={(e) =>
                                    updateProduct(
                                      index,
                                      "productPrice",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger me-3"
                                  style={{
                                    color: "#9C254D",
                                    backgroundColor: "#FFFFFF",
                                    padding: "2%",
                                    marginRight: "3%",
                                  }}
                                  onClick={() => deleteProduct(index)}
                                >
                                  <AiFillDelete />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <label>Remark:</label>
                  <textarea
                    type="text"
                    rows="3"
                    className="form-control"
                    name="remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#00235B", color: "white" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
