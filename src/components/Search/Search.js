import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchMovieSuccess } from "../../redux/movie/actions";
import "./Search.css";
const Search = ({ searchMovieSuccess }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    searchMovieSuccess(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

Search.propTypes = {
  searchMovieSuccess: PropTypes.func.isRequired,
};

export default connect(null, { searchMovieSuccess })(Search);
