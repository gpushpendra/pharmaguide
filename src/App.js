import "./App.css";
import "./Pages/med.css";
import Header from "./Component/Header";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MedicineCompare from "./Pages/MedicineCompare";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Component/Dashboard";
import MyList from "./Pages/MyList/MyList";

function App() {
  return (

    <>
      <Router>
        <Header title="PharmaGuide" />
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/login" element={<Login />}></Route>
          <Route  path="/signup" element={<Signup />}></Route>
          <Route  path="/MedicineCompare" element={<MedicineCompare />}></Route>
          <Route  path="/MyList" element={<MyList />}></Route>




        </Routes>
      </Router>
      
    </>
  );
}

export default App;
