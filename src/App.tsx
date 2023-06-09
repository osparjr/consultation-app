import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="contents">
          <div className=" ">
            <div className="cards">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
