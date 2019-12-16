import React from "react";
import { connect } from "react-redux";
import { searchByName } from "../Actions";

var formStyle = {
  margin: "auto",
  maxWidth: "300px"
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <>
        <form action="#" style={formStyle}>
          <input
            type="text"
            placeholder="Search.."
            name="search2"
            ref={this.myRef}
          />
          <button
            type="button"
            onClick={() => {
              var newArr = this.props.list.filter(function(v) {
                if (v.name.indexOf(this.myRef.current.value) !== -1) {
                  return true;
                } else {
                  return false;
                }
              }, this);
              this.props.searchByName(newArr);
            }}
          >
            Search
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = store => {
  return { list: store.section };
};
export default connect(
  mapStateToProps,
  { searchByName }
)(Search);
