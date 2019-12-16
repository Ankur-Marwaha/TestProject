import React from "react";
import Search from "./Search";
import { getCharactersSuccess, sortById } from "../Actions";
import CardsList from "./CardsList";
import { connect } from "react-redux";

var floatRigth = {
  position: "absolute",
  right: "0px"
};
var floatLeft = {
  position: "absolute",
  left: "0px"
};
var sectionCSS = {
  position: "relative",
  top: "50px",
  background: "black"
};
class Section extends React.Component {
  sort(value) {
    if (value === "Ascending") {
      var sortedArray = this.props.asdf.section.sort(function(a, b) {
        return a.id - b.id;
      });
      this.props.sortById(sortedArray);
    } else if (value === "Descending") {
      sortedArray = this.props.asdf.section.sort(function(a, b) {
        return b.id - a.id;
      });
      this.props.sortById(sortedArray);
    }
  }
  render() {
    return (
      <>
        Selected Filters
        <div style={floatLeft}>
          <div>Search by Name</div>
          <div>
            <Search />
          </div>
        </div>
        <div style={floatRigth}>
          <select
            onChange={e => {
              this.sort(e.target.value);
            }}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        <div style={sectionCSS}>
          <CardsList />
        </div>
      </>
    );
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(data => {
        this.props.getCharactersSuccess(data.results);
      });
  }
}

const mapStateToProps = store => {
  return { asdf: store };
};

export default connect(
  mapStateToProps,
  { getCharactersSuccess, sortById }
)(Section);
