import React from "react";
import Filters from "./Filters";
import Section from "./Section";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Filters />
            </div>
            <div className="col-sm-9">
              <Section />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
