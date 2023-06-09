import stilogo from "../assets/images/STI Logo.png";
import stibanner from "../assets/images/sti_herobanner.jpg";
import { useNavigate } from "react-router-dom";
import windows from "../assets/images/windows.png";
function LoginNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar-">
        <div className="flex-nowrap bg-dark-blue container-fluid">
          <img src={stilogo} className="ma2 w3 img-fluid rounded" alt="..." />
        </div>
      </nav>
      <section className="flex flex-column align-items-center">
        <img src={stibanner} className=" img-fluid" alt="..." />
      </section>

      <div className="login  ">
        <h1>Login Now</h1>
        <button
          onClick={() => navigate("/home")}
          className="btn btn-danger"
          style={{
            backgroundColor: "#FF4136",
            fontSize: "12px",
            padding: "12px 30px 12px 12px",
          }}
        >
          <img
            src={windows}
            className=" mw1 mh3 img-fluid"
            alt="..."
            style={{ filter: "brightness(0) invert(1)" }}
          />
          SIGN IN USING STI 0365 ACCOUNT
        </button>
      </div>
    </>
  );
}

export default LoginNavBar;
