 import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";
import Newsbar from "./Newsbar";

const Dashboard =()=>{
    return(
        <>
      <SearchBar />
      <div className="board">
        <div className="board-row">
          <Card feature="Medicine Compare" icon="" />
          <Card feature="Medicine by Condition" />
        </div>
        <div className="board-row">
          <Card feature="Drug Identifier " />
          <Card feature="FeedBack" />
        </div>
        <div className="board-row">
          <Card feature="My Medicine List" />
          <Card feature="Empty" />
        </div>
      </div>
      <Newsbar />
      <Footer />
        
        </>
    )
};

export default Dashboard;