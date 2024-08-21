import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "./Authentication";
import Header from "./Header";
function Tests() {
  useRequireAuth();
  const navigate = useNavigate();
  const [testsdata, setTestsData] = useState([]);
  const [testType, setTestType] = useState();
  const [testId, setTestId] = useState();
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/test/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userdata?.data?.accessToken}`,
        },
      });
      const data = await res.json();
      setTestsData(data?.data?.tests);
    }
    fetchData();
  }, [userdata?.data?.accessToken]);

  const tests = testsdata.filter((item) => {
    return item.testType === testType;
  });

  return (
    <div className="tests-background">
      <Header />
      <div className="flex-column tests-select-section">
        <div className="flex-column tests-section-inner">
          <p>Select the exam you want to appear</p>
          <select className="tests-section" onChange={(e) => setTestType(e.target.value)}>
            <option value="">select</option>
            <option value="jee-mains">Jee-Mains</option>
            <option value="neet">Neet</option>
          </select>

          <p>Paper</p>
          <select
            className="tests-section"
            onChange={(e) => {
              setTestId(e.target.value);
            }}
          >
            <option>select</option>
            {testType !== "" &&
              tests.map((item, idx) => {
                return (
                  <option value={item._id} key={idx}>
                    {item.testName}
                  </option>
                );
              })}
          </select>

          <button
            onClick={() => {
              navigate(`/tests/exam/${testId}`);
            }}
          >
            START MOCK TEST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tests;
