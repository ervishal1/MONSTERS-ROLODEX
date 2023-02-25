import React, { Component } from "react";
import './search-box.style.css'

export default class SearchBox extends Component {
  render() {
    const { onInputChangeHandler, placeholder } = this.props;
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={placeholder}
          onChange={onInputChangeHandler}
        />
      </div>
    );
  }
}
