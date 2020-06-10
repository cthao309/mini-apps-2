import React from 'react';

import SearchForm from './SearchForm/SearchForm.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      results: [],
      pageCount: 1,
      term: "",
      selectedPage: 1
    };
  }

  handleSearch(searchTerm) {
    const { selectedPage } = this.state;
    axios
      .get(`/events?q=${searchTerm}&_page=${selectedPage}`)
      .then(res =>
        this.setState({
          results: res.data,
          loading: false,
          term: searchTerm,
          pageCount: Math.ceil(res.headers["x-total-count"] / 10)
        })
      )
      .catch(err => console.log(err));
  }

  handlePageChange(data) {
    let selected = data.selected + 1;
    this.setState({ selectedPage: selected }, () => {
      this.handleSearch(this.state.term, this.state.selectedPage);
    });
  }

  render() {
    const loadingStyles = {
      margin: "25% auto",
      textAlign: "center"
    };

    const { results, pageCount } = this.state;
    console.log(results);

    return (
      <div>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
      </div>
    )
  }
}

export default App;

