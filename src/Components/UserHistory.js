import React, { useEffect } from "react";

function UserHistory() {
  // let [userHistory, setUserHistory] = useState({});
  useEffect(() => {
    fetchUserHistoryData();
  });
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  async function fetchUserHistoryData() {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/user/history`, {
        headers: {
          Authorization: `Bearer ${userdata?.data?.accessToken}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch test data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return <></>;
}

export default UserHistory;
