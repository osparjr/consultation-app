import img from "../assets/images/STI Logo.png";
import { useState } from "react";
import data from "../assets/data.json";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    const result = data.filter((data) => {
      return data && data.name;
    });
    console.log(value);
  };

  return (
    <>
      <nav className=" navbar bg-body-tertiary">
        <div className="bg-dark-blue container-fluid">
          <img src={img} className="ma2 w3 img-fluid rounded" alt="..." />
          <form className="  d-flex" role="search">
            <input
              className=" form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default SearchBar;
