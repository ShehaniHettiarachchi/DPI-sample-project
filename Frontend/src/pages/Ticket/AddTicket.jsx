import React from "react";
import axios from "axios";
import { useState } from "react";
import { makeToast } from "../../components";
import AddProduct from "../Product/AddProduct";

export default function AddTicket() {
  const options = ["Active", "Inactive"];

  //Ticket Details
  const [ticketID, setTicketID] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketStatus, setTicketStatus] = useState("");
  const [remark, setRemark] = useState("");

  //Ticket Details
  function sendTicketData(e) {
    e.preventDefault();

    const newTicket = {
      ticketID,
      ticketName,
      ticketPrice,
      ticketStatus,
      remark,
    };

    axios
      .post("http://localhost:5000/ticket/", newTicket)
      .then(() => {
        makeToast({ type: "success", message: "Ticket added Successfully" });

        setTicketID("");
        setTicketName("");
        setTicketPrice("");
        setRemark("");
      })
      .catch((error) => {
        alert(error);
      });
  }

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
            <form
              onSubmit={sendTicketData}
              className="row g-3 p-6 was-validated"
            >
              <div className="col-md-6">
                <label for="inputID" className="form-label">
                  Ticket ID
                </label>
                <input
                  type="text"
                  id="ticketID"
                  className="form-control"
                  name="ID"
                  placeholder="ex : 000"
                  pattern="^[0-9]{1,3}$"
                  maxLength="3"
                  onChange={(e) => setTicketID(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Ticket ID</div>
                <div className="invalid-feedback">
                  Ticket ID is required & All characters should be numbers (ex:
                  000).
                </div>
              </div>
              <div className="col-md-6">
                <label for="inputName" className="form-label">
                  Ticket Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketName"
                  onChange={(e) => setTicketName(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Ticket Name</div>
                <div className="invalid-feedback">Ticket Name is required</div>
              </div>

              <div className="col-md-6">
                <label for="inputPrice" className="form-label">
                  Ticket Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketPrice"
                  maxLength="5"
                  pattern="^[0-9]{1,5}$"
                  onChange={(e) => setTicketPrice(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid ticket price</div>
                <div className="invalid-feedback">
                  Ticket Price is required.
                </div>
              </div>

              {/* product Details Form */}
              <AddProduct />
              {/* product Details Form */}

              <div className="col-md-6">
                <label for="inputStatus" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  name="remark"
                  onChange={(e) => setTicketStatus(e.target.value)}
                  required
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <div className="valid-feedback">Valid Status</div>
                <div className="invalid-feedback">Status is required.</div>
              </div>

              <div className="">
                <label for="inputRemark" className="form-label">
                  Remark
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="3"
                  name="remark"
                  checked={remark}
                  onChange={(e) => setRemark(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12 ">
                <button
                  type="submit"
                  className="btn btn-primary ps-5 pe-5"
                  style={{ backgroundColor: "#205E61" }}
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
