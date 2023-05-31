import img from "../assets/images/a1.png";
import data from "../assets/data.json";

const CardList = (props) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div
            key={data.id}
            className=" grow xl card mb-3"
            style={{ maxWidth: "10em", height: "100%" }}
          >
            <i className="bi bi-caret-down-square" />
            <div className="row g-0  bg-light-gray" style={{ height: "100%" }}>
              <div className="col-md-4">
                <img
                  src={img}
                  className="pa3 img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="f3  tc card-title">{data.name}</h5>
                  <p className="f6 tc card-text">{data.status}</p>
                  <p className="tc card-text"></p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardList;
