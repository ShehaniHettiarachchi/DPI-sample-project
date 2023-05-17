import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { makeToast } from "../../components";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function Products() {

  const [Allproducts, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
        
  });
   
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/product/${id}`)
    .then((res) => {
      makeToast({ type: "success", message: "Product deleted Successfully" });
    });

    setProducts(Allproducts.filter((product) => product._id !== id));
  };
  

  return (
    <div className="pt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ACTION</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>
        {Allproducts.map((product) => (
        <tbody>
          <tr>
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
                onClick={() => deleteProduct(product._id)}
              >
                {" "}
                <AiFillDelete />
              </button>
              <button
                type="button"
                className="btn btn-warning ms-2"
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
            <td>{product.productName}</td>
            <td>{product.productPrice}</td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  );
}
