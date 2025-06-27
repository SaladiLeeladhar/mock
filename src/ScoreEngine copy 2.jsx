import { useState } from "react";

function ScoreEngine() {
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
  function restartGame() {}
  return (
    <div className="bg-white border border-green-200 rounded-xl shadow p-6 w-full max-w-md">
      <div>
        <h1 className="text-xl font-bold text-green-800 mb-4">Score Engine</h1>
      </div>
      <div className="flex gap-8 justify-center  ">
        <div className=" h-16 w-30 bg-blue-200 flex flex-col justify-center items-center ">
          <span>{runs}</span> <span> Runs </span>
        </div>
        <div className=" h-16 w-30  bg-red-200 flex  flex-col justify-center items-center">
          <span>{balls}</span> <span>Balls</span>
        </div>
        <div className="h-16 w-30 bg-red-300 flex flex-col justify-center items-center">
          <span>{wickets}/10</span>
          <span>Wickets</span>
        </div>
      </div>
      <br />
      <div className=" flex flex-col bg-blue-100 ">
        <span>Page:{page}</span>
        <span className="font-bold">🏏 {displayWicket ? "WICKET!" : ""}</span>
      </div>
      <br />
      <div className="flex items-center justify-between">
        <button
          onClick={playBall}
          type="button"
          className="text-white bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-90
          flex space-between flex-row justify-center"
        >
          ▶Play Ball
        </button>
        <button
          onClick={restartGame}
          className="bg-gray-600 h-9 w-10 rounded-lg"
        >
          {" "}
          🔄
        </button>
      </div>
    </div>
  );
}

export default ScoreEngine;
