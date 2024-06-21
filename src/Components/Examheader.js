import React from "react";
import Timer from "./Timer";
function Header(props) {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  let duration = props.duration;
  let setDuration = props.setDuration;
  let testdata = props.testdata;
  let issubmit = props.issubmit;
  return (
    <div className="Exam-header">
      <div className="profile-image" />
      <div className="Information-exam">
        <p>Candidate name : {userdata?.data?.loggedInUser?.username}</p>
        {/* <p>Subject name : {}</p> */}
        <p>Exam name : {props.test}</p>
        <p>
          Time Left : <Timer response={props.response} duration={duration} setDuration={setDuration} testdata={testdata} issubmit={issubmit} />
        </p>
      </div>
    </div>
  );
}
export default Header;
