import React, { Component } from "react";
import './card-list.style.css';

import Card from '../card/Card'

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((data) => {
            const { name, email, id} = data
            return(
            <Card key={id} name={name} email={email} id={id}/>
        )})}
      </div>
    );
  }
}
