import React, { Component } from "react";
import './card.style.css';

export default class Card extends Component {
  render() {
    const { name, email, id} = this.props;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
