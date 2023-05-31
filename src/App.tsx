import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="contents">
          <div className="sb-container">
            <SearchBar />
          </div>
          <div className="container">
            <div className="cards">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
