import "./App.css";
import "./Pages/med.css";
import Header from "./Component/Header";
import About from "./Pages/About";
import MedicineCompare from "./Pages/MedicineCompare";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";

function App() {
  return (

    <>
      <Router>
        <Header title="PharmaGuide" />
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route  path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
