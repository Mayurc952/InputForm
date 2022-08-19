import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const MultiProb = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/");
  };
  return (
    <>
      <div className="main">
        <h1 style={{ color: "blue", position: "center" }}>
          <u> Multiple Parameter List</u>
        </h1>
        <br />
        <br />
        <p>1.Have you Diagnosed with this problem? </p>{" "}
        <p>2.Did the problem start after physical traum?</p>{" "}
        <p>3.When do you experience the problem?</p>{" "}
        <p>4. How often do you experience the problem</p>{" "}
        <p>5. Did the problem start after mental traum?</p>{" "}
        <button type="button" onClick={handleClick} class="btn btn-danger">
          Back
        </button>
      </div>
    </>
  );
};

export default MultiProb;
