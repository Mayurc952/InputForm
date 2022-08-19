import React from "react";
import { useNavigate } from "react-router-dom";

const Summery = ({ data }) => {
  //const value= Object.values(data)
  const history = useNavigate();

  const handleClick = () => {
    history("/");
  };

  return (
    <>
      <div className="main">
        <h1 style={{ color: "blue", position: "center" }}>
          <u> Pain and Functional Summery:</u>
        </h1>
        <br />
        <br />

        <table class="table table-sm border border-danger">
          <thead>
            <tr class="table-primary">
              <th scope="col">Symptoms</th>
              <th scope="col">Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <span>Have you Diagnosed with this problem?</span>
              </th>
              <td colspan="2">
                <p>{data.diagnosed1}</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>Did the problem start after physical traum?</span>
              </th>
              <td colspan="2">
                <p>{data.diagnosed2}</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>When do you experience the problem?</span>
              </th>
              <td colspan="2">
                <p>{data.diagnosed3}</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <span>
                  How intense is the experience of the problem on Average on a
                  1-5:
                </span>
              </th>
              <td colspan="2">
                <p>{data.exp}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={handleClick} class="btn btn-primary">
          Back
        </button>
      </div>
    </>
  );
};

export default Summery;
