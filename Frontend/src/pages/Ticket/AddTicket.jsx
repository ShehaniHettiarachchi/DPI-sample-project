import React from "react";
import axios from "axios";
import { makeToast } from "../../components/toast/index";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function AddTicket() {

  const options = ["Active", "Inactive"];

  const [ticketID, setTicketID] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketStatus, setTicketStatus] = useState("");
  const [remark, setRemark] = useState("");


  function sendData(e) {
    e.preventDefauld();

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
        makeToast("success", "Ticket Added Successfully");

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
            <form onSubmit={sendData} className="row g-3 p-6 was-validated">
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
                  onChange={(e) => setTicketID(e.target.value)}
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
                  onChange={(e) => setTicketName(e.target.value)}
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
                  onChange={(e) => setTicketPrice(e.target.value)}
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
                <div class="btn-group col-md-6 mt-5 me-5 pt-5" role="group" aria-label="Basic radio toggle button group">

                  {options.map((value) => (
                   <label class="btn btn-outline-info" type="radio"
                      value={value}
                      checked={ticketStatus === value}
                      onChange={(e) => setTicketStatus(e.target.value)}
                    >{value}
                  </label>
                  ))}
                  {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                  <label class="btn btn-outline-info" for="btnradio1">Active</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                  <label class="btn btn-outline-info" for="btnradio2">Inactive</label> */}
                </div>
                <div className="valid-feedback">Valid Status</div>
                <div className="invalid-feedback">Status is required.</div>
              </div>

              <div class="">
                <label for="inputRemark" class="form-label">
                  Remark
                </label>
                <textarea
                  type= "text"	
                  class="form-control"
                  rows="3"
                  name="remark"
                  onChange={(e) => setRemark(e.target.value)}
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
