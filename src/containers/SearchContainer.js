import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSearchTerm } from "../actionCreators";
import Search from "../components/Search";

class SearchContainer extends Component {
  handleInputChange = e => {
    this.props.updateSearchTerm(e.currentTarget.value);
  };

  render() {
    return (
      <Search value={this.props.searchTerm} onChange={this.handleInputChange} />
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps, { updateSearchTerm })(SearchContainer);
