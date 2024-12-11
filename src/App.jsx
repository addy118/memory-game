import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <Game count={12} />
    </div>
  );
}

export default App;
