import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function AddTicket() {
  return (
    <div>
      <div
        className="container"
        style={{ paddingBottom: "150px", paddingTop: "30px" }}
      >
        <div
          class="card"
          style={{
            borderBlockStartColor: "#205E61",
            borderBlockStartWidth: "10px",
          }}
        >
          <div class="card-header">
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
          <div class="card-body">
            <form className="row g-3 p-6 was-validated">
              <div class="col-md-6">
                <label for="inputID" class="form-label">
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
                  // onChange={(e) => setTicketID(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Ticket ID</div>
                <div className="invalid-feedback">
                  Ticket ID is required & All characters should be numbers (ex:
                  000).
                </div>
              </div>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Ticket Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketName"
                  //onChange={(e) => setTicketName(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Ticket Name</div>
                <div className="invalid-feedback">Ticket Name is required</div>
              </div>

              <div class="col-md-6">
                <label for="inputPrice" class="form-label">
                  Ticket Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketPrice"
                  maxLength="5"
                  pattern="[0-9]"
                  // onChange={(e) => setTicketPrice(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid ticket price</div>
                <div className="invalid-feedback">
                  Ticket Price is required.
                </div>
              </div>

              {/* product Details Form */}
              <div
                className="container"
                style={{ paddingBottom: "30px", paddingTop: "30px" }}
              >
                <div
                  class="card"
                  style={{
                    backgroundColor: "#E3F4F4",
                  }}
                >
                  <form className="row g-3 p-6 was-validated">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="productName"
                        // onChange={(e) => setTicketPrice(e.target.value)}
                        required
                      ></input>
                      <div className="valid-feedback">Valid product name</div>
                      <div className="invalid-feedback">
                        Product name is required.
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="inputPrice" class="form-label">
                        Product Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="productPrice"
                        maxLength="5"
                        pattern="^[0-9]{1,5}$"
                        // onChange={(e) => setTicketPrice(e.target.value)}
                        required
                      ></input>
                      <div className="valid-feedback">Valid product price</div>
                      <div className="invalid-feedback">
                        Product Price is required.
                      </div>
                    </div>

                    <div class="col-md-6">
                      <button
                        type="submit"
                        class="btn ps-5 pe-5"
                        style={{ backgroundColor: "#576CBC", color: "white" }}
                      >
                        ADD
                      </button>
                    </div>
                    <div class="col-md-6">
                      <button
                        type="submit"
                        class="btn ps-5 pe-5"
                        style={{ backgroundColor: "#E21818", color: "white" }}
                      >
                        CLEAR
                      </button>
                    </div>
                  </form>
                  <div class="pt-5">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ACTION</th>
                          <th>PRODUCT NAME</th>
                          <th>PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger me-3"
                              style={{
                                color: "#9C254D",
                                backgroundColor: "#FFFFFF",
                                padding: "2%",
                                marginRight: "3%",
                              }}
                            >
                              {" "}
                              <AiFillDelete />
                            </button>
                            <button
                              type="button"
                              class="btn btn-warning ms-2"
                              style={{
                                color: "#03C988",
                                backgroundColor: "#FFFFFF",
                                padding: "2%",
                                marginRight: "3%",
                              }}
                            >
                              {" "}
                              <FaEdit />
                            </button>
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* product Details Form */}

              <div class="col-md-6">
                <label for="inputStatus" class="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  type="text"
                  name="status"
                  // onChange={(e) => setTicketStatus(e.target.value)}
                  required
                >
                  {/* {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))} */}
                </select>
                <div className="valid-feedback">Valid Status</div>
                <div className="invalid-feedback">Status is required.</div>
              </div>

              <div class="">
                <label for="inputDescription" class="form-label">
                  Remark
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  name="remark"
                ></textarea>
              </div>
              <div class="col-12 ">
                <button
                  type="submit"
                  class="btn btn-primary ps-5 pe-5"
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
