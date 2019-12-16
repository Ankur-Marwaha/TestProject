import React from "react";

var nameCSS = {
  position: "relative",
  top: "-40px",
  background: "grey",
  height: "30px"
};
class Card extends React.Component {
  render() {
    var data = this.props.data;
    return (
      <>
        <div className="col-sm-3" style={{ top: "5px" }}>
          <div className="card">
            <img
              className="card-img-top"
              src={data.image}
              alt="Card cap"
              style={{ width: "100%" }}
            />
            <div className="card-body" style={nameCSS}>
              <h5 className="card-title">
                <b>{data.name}</b>
                <br />
                <span>id: {data.id}</span>
              </h5>
            </div>
            <ul
              className="list-group list-group-flush"
              style={{
                position: "relative",
                top: "-35px",
                textJustify: "left"
              }}
            >
              <li className="list-group-item">Status:{data.status}</li>
              <li className="list-group-item">Species:{data.species}</li>
              <li className="list-group-item">Gender:{data.gender}</li>
              <li className="list-group-item">Origin:{data.origin.name}</li>
              <li className="list-group-item">
                Last location:{data.location.name}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
