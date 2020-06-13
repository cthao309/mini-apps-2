import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  }

  render() {
    const { searchTerm } = this.state;

    const fontStyles = {
      color: "white"
    };

    return (
      <div>
        <nav className="navbar navbarr-dark bg-dark justify-content-between">
          <a className="navbar-brand" style={fontStyles}>
            Historical Events Finder
          </a>
          <form onSubmit={this.handleSearch} className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChanges}
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Header;
