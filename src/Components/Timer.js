import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Timer(props) {
  let navigate = useNavigate();
  const { id } = useParams();
  let time = props.duration;
  let setTime = props.setDuration;
  let issubmit = props.issubmit;
  const handleSubmit = async () => {
    try {
      console.log(`submit happened =  ${id}`);
      console.log(responses);
      const res = await fetch(`${REACT_APP_BACKEND_SERVER_URL}/api/v1/attempt/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userdata?.data?.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ responses: responses }),
      });
      let data = await res.json();
      if (data?.statusCode === 200) navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (issubmit || prevTime === 0) {
          handleSubmit();
          clearInterval(interval);
          return 0;
        } else if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [issubmit, handleSubmit]);
  let responses = props.response;
  const userdata = JSON.parse(localStorage.getItem("userdata"));

  const getFormatTime = (time) => {
    let total_hrs = parseInt(time / (60 * 60));
    let total_mins = parseInt(Math.floor(time / 60));

    let s = parseInt(time % 60);
    let m = parseInt(total_mins % 60);
    let h = parseInt(total_hrs % 24);

    const padWithZero = (num) => {
      return num < 10 ? `0${num}` : num;
    };

    return `${padWithZero(h)} : ${padWithZero(m)} : ${padWithZero(s)}`;
  };

  return <>{getFormatTime(time)}</>;
}

export default Timer;
