import { useNavigate } from "react-router-dom";
function Dropdown() {
  const navigate = useNavigate();
  return (
    <div>
      <i className="bi bi-person-circle" onClick={() => navigate(-1)}></i>
      {/* <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Dropdown;
