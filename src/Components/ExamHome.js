import React, { useState } from "react";
import ExamFooter from "./Examfooter";
import Examquestions from "./Examquestions";
import Examheader from "./Examheader";
import { useParams } from "react-router-dom";

function Examhome() {
  const { id } = useParams();
  let [subject, setSubject] = useState("");
  let [test, setTest] = useState("");
  let [duration, setDuration] = useState(0);
  let [issubmit, setIssubmit] = useState(false);
  let [testdata, setTestData] = useState();
  let [response, setResponse] = useState([]);

  return (
    <>
      <Examheader response={response} testdata={testdata} subject={subject} test={test} duration={duration} setDuration={setDuration} issubmit={issubmit} />
      <Examquestions setResponse={setResponse} setTestData={setTestData} id={id} duration={duration} setDuration={setDuration} setTest={setTest} setSubject={setSubject} setIssubmit={setIssubmit} />
      <ExamFooter />
    </>
  );
}

export default Examhome;
