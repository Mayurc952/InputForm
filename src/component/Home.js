import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = ({ setData }) => {
  const history = useNavigate();
  const [allValues, setValues] = useState({
    diagnosed1: "",
    diagnosed2: "",
    diagnosed3: "",
    exp: "",
  });

  useEffect(() => {
    setData(allValues);
  });

  const changeHandler = (e) => {
    setValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    history("/summery");
  };
  const multiPro = () => {
    history("/MultiProb");
  };
  return (
    <>
      <div className="main">
        <h1 style={{ color: "blue", position: "center" }}>
          <u> Pain and Functional Description</u>
        </h1>
        <br />
        <br />
        <div className="select">
          <labele>Have you Diagnosed with this problem? </labele>{" "}
          <input
            type="radio"
            name="diagnosed1"
            value="Not Relevent"
            onChange={changeHandler}
          />
          Not Relevent
          <input
            type="radio"
            name="diagnosed1"
            value="No"
            onChange={changeHandler}
          />
          No
          <input
            type="radio"
            name="diagnosed1"
            value="Yes"
            onChange={changeHandler}
          />
          Yes
        </div>
        <hr />
        <div className="select">
          <labele>Did the problem start after physical traum?</labele>{" "}
          <input
            type="radio"
            name="diagnosed2"
            value="Not Relevent"
            onChange={changeHandler}
          />
          Not Relevent
          <input
            type="radio"
            name="diagnosed2"
            value="No"
            onChange={changeHandler}
          />
          No
          <input
            type="radio"
            name="diagnosed2"
            value="Yes"
            onChange={changeHandler}
          />
          Yes
        </div>
        <hr />
        <div className="select">
          <labele>When do you experience the problem?</labele>{" "}
          <input
            type="radio"
            name="diagnosed3"
            value="When lying down"
            onChange={changeHandler}
          />
          When lying down
          <input
            type="radio"
            name="diagnosed3"
            value="When Sitting"
            onChange={changeHandler}
          />
          When Sitting
          <input
            type="radio"
            name="diagnosed3"
            value="Under Standing"
            onChange={changeHandler}
          />
          Under Standing
          <input
            type="radio"
            name="diagnosed3"
            value="In walking"
            onChange={changeHandler}
          />
          In walking
        </div>

        <hr />
        <div className="select">
          <labele>
            How intense is the experience of the problem on Average on a 1-5
          </labele>{" "}
          <input type="radio" name="exp" value="1" onChange={changeHandler} />1
          <input type="radio" name="exp" value="2" onChange={changeHandler} />2
          <input type="radio" name="exp" value="3" onChange={changeHandler} />3
          <input type="radio" name="exp" value="4" onChange={changeHandler} />4
          <input type="radio" name="exp" value="5" onChange={changeHandler} />5
        </div>
        <hr />

        <button onClick={multiPro} style={{ color: "blue" }}>
          <b>+</b>
        </button>
        <br />
        <br />

        <button type="button" class="btn btn-danger mx-3">
          Back
        </button>
        <button type="button" onClick={handleClick} class="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
