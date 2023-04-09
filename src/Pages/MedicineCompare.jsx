import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { title } from 'process';


const MedicineCompare = () => {
  const [drugInfo, setDrugInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setDrugInfo(res.data));
  }, []);

  return (
    <>
      <div className="title">
        <h4>Medicice Compare</h4>
      </div>
      {drugInfo.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="container">
            <div className="row">
              <div className="col md-3">
                <h2>{title}</h2>
              </div>
              <div className="col md-3">
                <p>{id}</p>
              </div>
              <div className="col md-3">
                <p>{body}</p>
              </div>
            </div>
            <div className="row">
              <div className="col md-3">
                <h2>{this.props.obj.id}</h2>
              </div>
              <div className="col md-3">
                <p>{this.props.obj.product_ndc}</p>
              </div>
              <div className="col md-3">
                <p>{this.props.obj.brand_name}</p>
              </div>
            </div>
          </div>
          
        );
      })}
      ;
    </>
  );
};

export default MedicineCompare;
