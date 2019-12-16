import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

class CardsList extends React.Component {
  addCards() {
    if (this.props.list.length) {
      return this.props.list.map(function(v) {
        return <Card key={v.id} data={v} />;
      });
    }
  }
  render() {
    return (
      <>
        <div className="container" style={{ width: "inherit" }}>
          <div className="row">{this.addCards()}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return { list: store.section };
};

export default connect(mapStateToProps)(CardsList);
