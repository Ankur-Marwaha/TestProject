import React from "react";
import { connect } from "react-redux";
import { filter } from "../Actions";

var filterDiv = {
  textAlign: "left",
  border: "1px solid black",
  marginBottom: "4px",
  padding: "4px"
};

class Filters extends React.Component {
  onSelectSpecies(e) {
    var newArr = this.props.list.filter(function(v) {
      if (v.species.indexOf(e.target.value) !== -1) {
        return true;
      } else {
        return false;
      }
    }, this);
    this.props.filter(newArr);
  }
  onSelectGender(e) {
    var newArr = this.props.list.filter(function(v) {debugger;
      if (v.gender.indexOf(e.target.value) !== -1) {
        return true;
      } else {
        return false;
      }
    }, this);
    this.props.filter(newArr);
  }
  onSelectOrigin(e) {
    var newArr = this.props.list.filter(function(v) {
      debugger;
      if (v.origin.name.indexOf(e.target.value) !== -1) {
        return true;
      } else {
        return false;
      }
    }, this);
    this.props.filter(newArr);
  }
  render() {
    return (
      <div className="boxClass">
        Filters
        <div style={filterDiv}>
          Species
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Human"
                onClick={e => {
                  this.onSelectSpecies(e);
                }}
              />
              Human
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Mytholog"
                onClick={e => {
                  this.onSelectSpecies(e);
                }}
              />
              Mytholog
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Other"
                onClick={e => {
                  this.onSelectSpecies(e);
                }}
              />
              Other species
            </label>
          </div>
        </div>
        <div style={filterDiv}>
          Gender
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Male"
                onClick={e => {
                  this.onSelectGender(e);
                }}
              />
              Male
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Female"
                onClick={e => {
                  this.onSelectGender(e);
                }}
              />
              Female
            </label>
          </div>
        </div>
        <div style={filterDiv}>
          Origin
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="unknown"
                onClick={e => {
                  this.onSelectOrigin(e);
                }}
              />
              Unknown
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Post-Apocalyptic Earth"
                onClick={e => {
                  this.onSelectOrigin(e);
                }}
              />
              Post-Apocalyptic Earth
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Nuptia 4"
                onClick={e => {
                  this.onSelectOrigin(e);
                }}
              />
              Nuptia 4
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Other"
                onClick={e => {
                  this.onSelectOrigin(e);
                }}
              />
              Other Origins
            </label>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return { list: store.section };
};
export default connect(
  mapStateToProps,
  { filter }
)(Filters);
