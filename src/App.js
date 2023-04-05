import "./App.css";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import SearchBar from "./Component/SearchBar";
import News from "./Component/News";
function App() {
  return (
    <div>
      <Header title="PharmaGuide" />
      <SearchBar/>

      <div className="board">
        <div className="board-row">
          <Card feature="Medicine Compare"/>
          <Card feature="Medicine by Condition"/>
          
        </div>
        <div className="board-row">
          <Card feature="Drug Identifier "/>
          <Card feature="FeedBack"/>

          
        </div>
        <div className="board-row">
        <Card feature="My Medicine List"/>
          <Card feature="Empty"/>

          
        </div>
      </div>
      <News/>
      <Footer/>

    </div>
  );
}

export default App;
