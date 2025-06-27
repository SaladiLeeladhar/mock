import { useState } from "react";
import "./styles.css";

function App() {
  const [page, setPage] = useState();
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [displayWicket, setDisplayWicket] = useState(false);
  function playBall() {
    setPage(Math.floor(Math.random() * 1000));
    setBalls(balls + 1);
    if (page % 2 === 0 && page % 10 !== 0) {
      setRuns(runs + (page % 10) / 2);
      setDisplayWicket(false);
    } else if (page % 2 !== 0) {
      setRuns(runs + 0);
      setDisplayWicket(false);
    } else {
      setWickets(wickets + 1);
      setDisplayWicket(!displayWicket);
    }
  }
  return (
    <div className="page">
      <div className="Header">
        <h1>Book Cricket</h1>
        <p>Challenge components for React developers</p>
      </div>
      <div className="jumbotron">
        <h2 className="text-3xl font-bold underline">Match Manager</h2>
      </div>
      <div className="container">
        <h3>Score Engine</h3>
        <span>Runs:{runs} </span>
        <span>Balls:{balls} </span>
        <span>wickets:{wickets}/10 </span>
        <div>
          <span>page:{page}</span>
        </div>
        <br />
        <span>{displayWicket ? "Wicket!" : " "}</span>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={playBall}
          >
            Play Ball
          </button>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
