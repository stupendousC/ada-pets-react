import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

// answer key made SearchBar a functional Component and .setState on searchterm up in App.js
// I chose to do it this way
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }

  search = (event) => {
    this.setState({ searchTerm: event.target.value });

    // I'm using event.target.value b/c the state.searchTerm is behind by 1 letter due to asynch nature of setState()
    this.props.searchCallback(event.target.value);
  }

  render() {
    return (
      <section>
        <input value={this.state.searchTerm} onChange={this.search} className="search-bar" placeholder="Filter Pets"></input>
      </section>
    );
  }
};

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired,
};

export default SearchBar;
