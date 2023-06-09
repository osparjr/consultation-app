// import activeicon from "../assets/images/active-icon.png";
import users from "../data";
import img from "../assets/images/a1.png";

const Card = () => {
  return (
    <>
      <div className=" flex flex-column align-items-center">
        {users.map((users) => {
          return (
            <div
              key={users.id}
              className=" grow  card ma3"
              style={{
                maxWidth: "500px",
                height: "100%",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
              }}
            >
              <div
                className="  flex items-center row g-0  bg-light-gray"
                style={{ height: "100%" }}
              >
                <div className="col-md-4">
                  <img
                    src={img}
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
          );
        })}
      </div>
    </>
  );
};
export default Card;
