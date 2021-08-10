// import React, { useState } from "react";
// import cnt from "../styles/cnt.css";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import Card from "./Card";

// const Contact = () => {
//   let history = useHistory();
//   const [user, setUser] = useState({});
//   const [topic, settopic] = useState({});
//   const [details, setdetails] = useState({});

//   const [userErr, setUserErr] = useState(false);
//   const [topicErr, settopicErr] = useState(false);
//   const [detailsErr, setdetailsErr] = useState(false);

//   const { Fullname, Topic, Details } = user;
//   const onInputChange = (e) => {
//     let item = e.target.value;
//     if (item.length < 3) {
//       setUserErr(true);
//     } else {
//       setUserErr(false);
//     }
//     setUser(item);
//     let topics = e.target.value;
//     if (item.length < 5) {
//       settopicErr(true);
//     } else {
//       settopicErr(false);
//     }
//     settopic(topics);
//     let detailss = e.target.value;
//     if (detailss.length < 10) {
//       setdetailsErr(true);
//     } else {
//       setdetailsErr(false);
//     }
//     setdetails(detailss);
//   };
//   const onSubmit = async (e) => {
//     if (user.length < 3 || topic.length < 5 || details.length < 10) {
//       alert("type correct value");
//     } else {
//       e.preventDefault();
//       await axios.post("http://localhost:3000/api/contactUs", user);
//       history.push("/");

//       alert("you query has been submitted..... 😊😊");
//     }
//   };

//   return (
//     <div>
//       <Card />
//       <div className="container">
//         <div className="w-75 mx-auto shadow p-5">
//           <h2 className="text-center mb-4">CONTACT US👍😁 </h2>
//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="form-group">
//               <h3>FullName:</h3>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 placeholder="Enter Your FullName"
//                 name="Fullname"
//                 value={Fullname}
//                 onChange={(e) => onInputChange(e)}
//               />

//               {userErr ? <span>Please Type correct value...</span> : ""}
//             </div>
//             <br />
//             <div className="form-group">
//               <h3>Topic:</h3>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 placeholder="Enter Your Topic"
//                 name="Topic"
//                 value={Topic}
//                 onChange={(e) => onInputChange(e)}
//               />
//               {topicErr ? (
//                 <span style={{ color: "red", fontSize: "20px" }}>
//                   Please Type corrcet value..
//                 </span>
//               ) : (
//                 ""
//               )}
//             </div>
//             <br />
//             <div className="form-group">
//               <h3>Details</h3>
//               <input
//                 type="text"
//                 className="form-control form-control-lg"
//                 placeholder="Enter Your Details"
//                 name="Details"
//                 value={Details}
//                 onChange={(e) => onInputChange(e)}
//               />
//               {detailsErr ? (
//                 <span style={{ color: "red", fontSize: "20px" }}>
//                   Please Type corrcet value..
//                 </span>
//               ) : (
//                 ""
//               )}
//             </div>

//             <button
//               className="submit"
//               style={{ marginLeft: "400px", width: "100px", height: "50px" }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import cnt from "../styles/cnt.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "./Card";

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
     
      <Card />
      <br></br>
      <div className="contact-form col-sm-10">
        <div className="contact-form__container">
          <h2 className="contact-form__text">CONTACT US👍😁 </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label id="fname" for="search">FullName:</label>
              <input
                type="text"
                placeholder="Enter Your FullName"
                name="Fullname"
                id="search"
                value={Fullname}
                onChange={(e) => onInputChange(e)}
              />

              {userErr ? (
                <span className="contact-form__txt">
                  {" "}
                  Please Type correct value...
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <label  id="fname2" for="search2">Topic:</label>
              <input
                type="text"
                id="search2"
                placeholder="Enter Your Topic"
                name="Topic"
                value={Topic}
                onChange={(e) => onInputChange(e)}
              />
              {topicErr ? (
                <span className="contact-form__txt">
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <label  id="fname1" for="search1">Details</label>
              <input
                type="text"
                id="search1"
                placeholder="Enter Your Details"
                name="Details"
                value={Details}
                onChange={(e) => onInputChange(e)}
              />
              {detailsErr ? (
                <span className="contact-form__txt">
                  Please Type corrcet value..
                </span>
              ) : (
                ""
              )}
            </div>
            <br></br>
            <button
              className="submit"
              // style={{ marginLeft: "400px", width: "100px", height: "50px" }}
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
