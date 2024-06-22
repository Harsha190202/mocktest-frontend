import React, { useEffect, useState } from "react";
import data1 from "../Files/Data/question1";
import { useParams } from "react-router-dom";

function Home(props) {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const { id } = useParams();
  const [data, setData] = useState(data1.message.questions);
  const [initialAnswers, setIntialAnswers] = useState(new Array(90).fill(null));
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [original, setOriginal] = useState(initialAnswers);
  const [button, setButton] = useState(initialAnswers);
  const [visu, setVisu] = useState([]);

  let setTest = props.setTest;
  let setDuration = props.setDuration;
  let setIssubmit = props.setIssubmit;
  let setTestData = props.setTestData;
  useEffect(() => {
    fetchTestdata();
  });

  async function fetchTestdata() {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/test/${id}`, {
        headers: {
          Authorization: `Bearer ${userdata?.data?.accessToken}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch test data");
      }
      const testdata = await res.json();
      setTestData(testdata);
      const questions = testdata?.data?.questions;
      setTest(testdata?.data?.testName);
      setDuration(testdata?.data?.testDuration * 60);

      setData(questions);
      const initanswers = new Array(questions?.length).fill(null);
      initanswers[0] = 0;
      setIntialAnswers(initanswers);
      setButton(initanswers);
      setOriginal(initanswers);
      setAnswers(initanswers);
    } catch (error) {
      console.error("Error fetching test data:", error);
    }
  }

  const updateBtnArray = (index, value) => {
    setButton((prevOriginal) => {
      const newArray = [...prevOriginal];
      newArray[index] = value;
      return newArray;
    });
  };

  const updateAnsArray = (index, value) => {
    setAnswers((prevOriginal) => {
      const newArray = [...prevOriginal];
      newArray[index] = value;
      return newArray;
    });
  };

  const updateOriArray = (index, value) => {
    setOriginal((prevOriginal) => {
      const newArray = [...prevOriginal];
      newArray[index] = value;
      return newArray;
    });
  };

  function handleSN() {
    const value = answers[question];

    if (data[question].questionType === "mcq") {
      if (value === 0) {
        alert("select an option");
        return;
      } else {
        updateBtnArray(question, 1);
        updateOriArray(question, value);
      }
    } else {
      const num = parseFloat(value).toFixed(2);
      if (isNaN(num)) {
        alert("give a valid input");
        return;
      } else {
        updateBtnArray(question, 1);
        updateOriArray(question, num);
      }
    }

    if (question !== data.length - 1) {
      if (button[question + 1] === null) {
        updateBtnArray(question + 1, 0);
        if (data[question + 1].questionType === "mcq") {
          updateAnsArray(question + 1, 0);
        } else {
          updateAnsArray(question + 1, "");
        }
      }

      setQuestion(question + 1);
    }
  }
  function handleCL() {
    updateBtnArray(question, 0);
    if (data[question].questionType === "mcq") {
      updateAnsArray(question, 0);
    } else {
      updateAnsArray(question, "");
    }
  }
  function handleSM() {
    const value = answers[question];
    if (data[question].questionType === "mcq") {
      if (value === 0) {
        alert("select an option");
        return;
      } else {
        updateBtnArray(question, 2);
        updateOriArray(question, value);
      }
    } else {
      const num = parseFloat(value).toFixed(2);
      if (isNaN(num)) {
        alert("give a valid input");
        return;
      } else {
        updateBtnArray(question, 2);
        updateOriArray(question, num);
      }
    }

    if (question !== data.length - 1) {
      updateBtnArray(question + 1, 0);
      if (answers[question + 1] === null) {
        if (data[question + 1].questionType === "mcq") {
          updateAnsArray(question + 1, 0);
        } else {
          updateAnsArray(question + 1, "");
        }
      }

      setQuestion(question + 1);
    }
  }
  function handleRN() {
    updateBtnArray(question, 3);
    if (question !== data.length - 1) {
      if (answers[question + 1] === null) {
        updateBtnArray(question + 1, 0);
        if (data[question + 1].questionType === "mcq") {
          updateAnsArray(question + 1, 0);
        } else {
          updateAnsArray(question + 1, "");
        }
      }
      setQuestion(question + 1);
    }
  }

  function handleBack() {
    if (question !== 0) {
      if (answers[question - 1] === null) {
        updateBtnArray(question - 1, 0);
        if (data[question - 1].questionType === "mcq") {
          updateAnsArray(question - 1, 0);
        } else {
          updateAnsArray(question - 1, "");
        }
      }
      setQuestion(question - 1);
    }
  }

  function handleNext() {
    if (question !== data.length - 1) {
      if (answers[question + 1] === null) {
        updateBtnArray(question + 1, 0);
        if (data[question + 1].questionType === "mcq") {
          updateAnsArray(question + 1, 0);
        } else {
          updateAnsArray(question + 1, "");
        }
      }
      setQuestion(question + 1);
    }
  }

  function handleQuestionChange(e) {
    const index = parseInt(e.target.textContent) - 1;
    if (answers[index] === null) {
      updateBtnArray(index, 0);
      if (data[index].questionType === "mcq") {
        updateAnsArray(index, 0);
      } else {
        updateAnsArray(index, "");
      }
    }
    setQuestion(() => {
      return index;
    });
  }

  function handleOption(event) {
    const idx = parseInt(event.target.id);
    let arr = [...answers];
    arr[question] = idx + 1;
    setAnswers(arr);
  }

  function handleInput(event) {
    const value = event.target.value;
    let arr = [...answers];
    arr[question] = value;
    setAnswers(arr);
  }
  let setResponse = props.setResponse;
  function handleSubmit() {
    setResponse(original);
    setIssubmit(true);
  }

  useEffect(() => {
    let arr = [0, 0, 0, 0, 0];
    button.forEach((op) => {
      if (op === null) {
        arr[0]++;
      } else if (op === 0) {
        arr[1]++;
      } else if (op === 1) {
        arr[2]++;
      } else if (op === 2) {
        arr[4]++;
        arr[3]++;
      } else {
        arr[3]++;
      }
    });
    setVisu(arr);
  }, [button]);

  return (
    <div className="Questions-Home">
      <div className="Questions-Home-left">
        <div className="Question-tab">
          <h3>Question {question + 1} : </h3>

          {data[question].questionType === "mcq" ? (
            <div>
              <div className="question">
                <img src={data[question].question} className="question-img" alt="question-pic" key={question} />
              </div>
              <div className="flex-row option-button">
                {Array(4)
                  .fill()
                  .map((_, idx) => (
                    <div key={idx}>
                      <input className="oneoption" type="radio" id={idx} name={question} checked={answers[question] === idx + 1} value={idx + 1} key={idx} onChange={handleOption} />
                      <label htmlFor={idx + 1}>{`${idx + 1}  )`}</label>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="question">
                <img src={data[question].question} className="question-img" alt="exam-question" />
              </div>
              <div>
                <input type="Text" onChange={handleInput} value={answers[question]} />
              </div>
            </div>
          )}
        </div>

        <div className="buttons-tab">
          <button onClick={handleSN} className="SNbutton">
            SAVE AND NEXT
          </button>
          <button onClick={handleCL} className="CLbutton">
            CLEAR
          </button>
          <button onClick={handleSM} className="SMbutton">
            SAVE AND MARK FOR REVIEW
          </button>
          <button onClick={handleRN} className="MRbutton">
            MARK FOR REVIEW AND NEXT
          </button>
        </div>

        <div className="options-tab">
          <div>
            <button className="btn back-next-btn" onClick={handleBack}>
              {" "}
              {`<< BACK`}
            </button>
            <button className="btn back-next-btn" onClick={handleNext}>
              {" "}
              {`NEXT >>`}
            </button>
          </div>

          <div>
            <button className="btn back-next-btn submit-btn " onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <div className="Questions-Home-right">
        <div className="options-visulization">
          <div className="flex-row nv">
            <div className="notv-btn">{visu[0]}</div>
            <div>Not visited</div>
          </div>
          <div className="flex-row na">
            <div className="nota-btn">
              <span className="nota-btn-span">{visu[1]}</span>
            </div>
            <div>Not Answered</div>
          </div>
          <div className="flex-row a">
            <div className="a-btn">
              <span className="nota-btn-span">{visu[2]}</span>
            </div>
            <div>Answered</div>
          </div>
          <div className="flex-row m">
            <div className="notm-btn">{visu[3]}</div>
            <div>Marked for review</div>
          </div>
          <div className="flex-row sm">
            <div className="notm-btn sm-btn">{visu[4]}</div>
            <div>Answered and Marked for review(will be considered for evaluation)</div>
          </div>
        </div>

        <div className="question-button-tab">
          {Array(data.length)
            .fill()
            .map((_, index) => (
              <div className={`button-${button[index] === null ? "null" : button[index]}`} key={index} onClick={handleQuestionChange}>
                <span className={`span-${button[index] === null ? "null" : button[index]}`}>{index + 1}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
