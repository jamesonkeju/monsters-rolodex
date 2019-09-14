import React from "react";
import "./search-box.styles.css";

const Search = ({ placeHolder, handleChange, totalCount }) => {
  if (totalCount > 0) {
    return (
      <div>
        <input
          className="search"
          type="search"
          onChange={handleChange}
          placeholder={placeHolder}
        ></input>
        <h1>We have {totalCount} monster(s) left to be defected </h1>;
      </div>
    );
  } else {
    return (
      <div>
        <input
          className="search"
          type="search"
          onChange={handleChange}
          placeholder={placeHolder}
        ></input>
        <h1>We defected all the monster {totalCount}</h1>
      </div>
    );
  }
};

export default Search;
