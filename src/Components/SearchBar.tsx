import img from "../assets/images/STI Logo.png";
import { useState } from "react";
import users from "../data";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import imguser from "../assets/images/a1.png";
import Dropdown from "./Dropdown";
export const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <nav className="navbar pa0">
        <div className="mb5 flex-nowrap bg-dark-blue container-fluid">
          <img src={img} className="ma2 w3 img-fluid rounded" alt="..." />

          <Dropdown />
        </div>
        <div
          className="mh4 pb5 div-search flex flex-row flex-nowrap justify-center"
          style={{ maxWidth: "100%", height: "100%" }}
        >
          <input
            style={{ maxWidth: "500px", height: "100%" }}
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <i className="bi bi-search"></i> */}
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </nav>
      {users
        .filter((val: any) => {
          if (input == "") {
            return val;
          } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
            return val;
          }
        })
        .map((users: any) => {
          return (
            <div
              className=" flex flex-column align-items-center ph4"
              style={{ flex: "grid", gridTemplateColumns: "1fr 1fr" }}
            >
              <div
                key={users.id}
                className=" grow  card mb-3"
                style={{ maxWidth: "500px", height: "100%" }}
              >
                <div
                  className="  flex items-center row g-0  bg-light-gray"
                  style={{ height: "100%" }}
                >
                  <div className="col-md-4">
                    <img
                      src={imguser}
                      className="pa3 img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="f3  tc card-title">{users.name}</h5>
                      <p className="f6 tc card-text">{users.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default SearchBar;
