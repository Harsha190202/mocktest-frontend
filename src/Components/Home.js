import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/tests");
  }
  return (
    <div className="Home-Layout">
      <Header />
      <div className="flex-row Content-Home ">
        <h2>Boost your exam productivity with MocK tests</h2>
        <h5>The best way to prepare for JEE MAIN entrance exam</h5>
        <div>
          <button onClick={handleClick}>Start Practicing</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
