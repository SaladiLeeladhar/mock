import ScoreEngine from "./ScoreEngine.jsx";
import Header from "./Header.jsx";
import Jumbotron from "./Jumbotron.jsx";
function App() {
  return (
    <div className="bg-sky-50">
      <div className="w-lg m-auto flex flex-col gap-4 ">
        <Header />
        <Jumbotron />
        <ScoreEngine />
      </div>
    </div>
  );
}

export default App;
