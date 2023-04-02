import "./App.css";
import Header from "./Component/Header";
import Card from "./Component/Card";

function App() {
  return (
    <div>
      <Header title="PharmaGuide" />
      <div className="board">
        <div className="board-row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="board-row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
