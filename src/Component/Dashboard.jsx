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
        <a className="nav-link" href='/MedicineCompare'><Card feature="Medicine Compare" imageSrc="img\syringe.png" imageAlt="My Image"/></a>
          <Card feature="Medicine by Condition" imageSrc="img\syringe.png" imageAlt="My Image" />
        </div>
        <div className="board-row">
          <Card feature="Drug Identifier " imageSrc="img\syringe.png" imageAlt="My Image" />
          <Card feature="FeedBack" imageSrc="img\syringe.png" imageAlt="My Image" />
        </div>
        <div className="board-row">
          <Card feature="My Medicine List" imageSrc="img\syringe.png" imageAlt="My Image" />
          <Card feature="Empty" imageSrc="img\syringe.png" imageAlt="My Image"/>
        </div>
      </div>
      <Newsbar />
      <Footer />
        
        </>
    )
};

export default Dashboard;

<svg  width="16" height="16" fill="currentColor" class="bi bi-prescription" viewBox="0 0 16 16">
  <path d="M5.5 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h.293l2 2-1.147 1.146a.5.5 0 0 0 .708.708L9 11.707l1.146 1.147a.5.5 0 0 0 .708-.708L9.707 11l1.147-1.146a.5.5 0 0 0-.708-.708L9 10.293 7.695 8.987A1.5 1.5 0 0 0 7.5 6h-2ZM6 7h1.5a.5.5 0 0 1 0 1H6V7Z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4H4ZM3 3h10V1H3v2Z"/>
</svg>