import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Zach from "./pages/Zach";
import Josh from "./pages/Josh";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zach" element={<Zach />} />
            <Route path="/josh" element={<Josh />} /> 
          </Routes>
      </div>
    </>
  );
}

export default App;
