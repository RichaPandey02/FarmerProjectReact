import React, { useState } from "react";
import cnt from "../styles/cnt.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Carousel from "../layout/Carousel";
const Contact = () => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [topic, settopic] = useState({});
  const [details, setdetails] = useState({});

  const [userErr, setUserErr] = useState(false);
  const [topicErr, settopicErr] = useState(false);
  const [detailsErr, setdetailsErr] = useState(false);

  const { Fullname, Topic, Details } = user;
  const onInputChange = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
    let topics = e.target.value;
    if (item.length < 5) {
      settopicErr(true);
    } else {
      settopicErr(false);
    }
    settopic(topics);
    let detailss = e.target.value;
    if (detailss.length < 10) {
      setdetailsErr(true);
    } else {
      setdetailsErr(false);
    }
    setdetails(detailss);
  };
  const onSubmit = async (e) => {
    if (user.length < 3 || topic.length < 5 || details.length < 10) {
      alert("type correct value");
    } else {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/contactUs", user);
      history.push("/");

      alert("you query has been submitted..... 😊😊");
    }
  };

  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4" style={{ color: "#eb2f06" }}>
            CONTACT US👍😁{" "}
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <h3>FullName:</h3>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your FullName"
                name="Fullname"
                value={Fullname}
                onChange={(e) => onInputChange(e)}
              />

              {userErr ? (
                <span style={{ color: "red", fontSize: "20px" }}>
                  Please Type correct value...
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <h3>Topic:</h3>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Topic"
                name="Topic"
                value={Topic}
                onChange={(e) => onInputChange(e)}
              />
              {topicErr ? (
                <span style={{ color: "red", fontSize: "20px" }}>
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <h3>Details</h3>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Details"
                name="Details"
                value={Details}
                onChange={(e) => onInputChange(e)}
              />
              {detailsErr ? (
                <span style={{ color: "red", fontSize: "20px" }}>
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </div>

            <button
              className="btn btn-primary btn-block"
              style={{ marginLeft: "400px", width: "100px", height: "50px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
