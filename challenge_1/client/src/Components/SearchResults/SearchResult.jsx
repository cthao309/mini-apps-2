import React from "react";

const SearchResults = props => {
  return (
    <div>
      <p>{props.data.description}</p>
      <hr />
    </div>
  );
};

export default SearchResults;